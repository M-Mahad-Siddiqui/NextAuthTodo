import Todo from '@/models/Todo';
import dbConnect from '@/lib/db';
import { getUserIdFromToken } from '@/lib/auth';
import { NextResponse } from 'next/server';

export async function PUT(request, { params }) {
  try {
    await dbConnect();
    const userId = await getUserIdFromToken();
    if (!userId) {
      return NextResponse.json(
        { message: 'Not authorized' },
        { status: 401 }
      );
    }

    const { id } = params;
    const { title, description, completed } = await request.json();

    const todo = await Todo.findOneAndUpdate(
      { _id: id, user: userId },
      { title, description, completed },
      { new: true }
    );

    if (!todo) {
      return NextResponse.json(
        { message: 'Todo not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(todo);
  } catch (error) {
    console.error('Update todo error:', error);
    return NextResponse.json(
      { message: 'Server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    await dbConnect();
    const userId = await getUserIdFromToken();
    if (!userId) {
      return NextResponse.json(
        { message: 'Not authorized' },
        { status: 401 }
      );
    }

    const { id } = params;
    const todo = await Todo.findOneAndDelete({ _id: id, user: userId });

    if (!todo) {
      return NextResponse.json(
        { message: 'Todo not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: 'Todo deleted' });
  } catch (error) {
    console.error('Delete todo error:', error);
    return NextResponse.json(
      { message: 'Server error' },
      { status: 500 }
    );
  }
}