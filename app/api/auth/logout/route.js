import { removeToken } from '@/lib/auth'; // adjust path as needed
import { NextResponse } from 'next/server';

// export async function POST() {
//   const response = NextResponse.json({ message: 'Logged out successfully' });
//   response.cookies.delete('token');
//   return response;
// }



export async function POST() {
  const response = NextResponse.json({ message: 'Logged out successfully' });
  removeToken(response);
  return response;
}
