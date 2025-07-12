import Todo from '@/models/Todo';
import dbConnect from '@/lib/db';
import { getUserIdFromToken } from '@/lib/auth';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await dbConnect();
    const userId = await getUserIdFromToken();
    if (!userId) {
      return NextResponse.json(
        { message: 'Not authorized' },
        { status: 401 }
      );
    }

    const todos = await Todo.find({ user: userId }).sort({ createdAt: -1 });
    return NextResponse.json(todos);
  } catch (error) {
    console.error('Get todos error:', error);
    return NextResponse.json(
      { message: 'Server error' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    const userId = await getUserIdFromToken();
    if (!userId) {
      return NextResponse.json(
        { message: 'Not authorized' },
        { status: 401 }
      );
    }

    const { title, description } = await request.json();
    
    if (!title) {
      return NextResponse.json(
        { message: 'Title is required' },
        { status: 400 }
      );
    }

    const todo = await Todo.create({
      title,
      description,
      user: userId,
    });

    return NextResponse.json(todo);
  } catch (error) {
    console.error('Create todo error:', error);
    return NextResponse.json(
      { message: 'Server error' },
      { status: 500 }
    );
  }
}