import { NextResponse } from 'next/server';
import { verifyToken } from './lib/auth';

export async function middleware(request) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  // Protected routes
  const protectedRoutes = ['/protected', '/todos'];
  const authRoutes = ['/login', '/register'];

  // If trying to access protected route without token
  if (protectedRoutes.some((route) => pathname.startsWith(route)) && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // If logged in and trying to access auth route
  if (authRoutes.includes(pathname) && token) {
    try {
      await verifyToken(token);
      return NextResponse.redirect(new URL('/todos', request.url));
    } catch (error) {
      // Token is invalid, let them access auth routes
      const response = NextResponse.next();
      response.cookies.delete('token');
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/protected/:path*', '/todos/:path*', '/login', '/register']
};