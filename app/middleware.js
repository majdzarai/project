import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const secretKey = 'your-secret-key'; // Replace with your actual secret key

export function middleware(request) {
  const token = request.headers.get('Authorization')?.split(' ')[1]; // Get the token from the Authorization header

  if (token) {
    try {
      const decoded = jwt.verify(token, secretKey);
      request.headers.set('x-user-id', decoded.id);
    } catch (error) {
      console.error('Invalid token:', error);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/profilestudent/:path*',
};
