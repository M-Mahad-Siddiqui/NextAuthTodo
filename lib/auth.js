import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// export const setToken = (token) => {
//   const cookieStore = cookies();
//   cookieStore.set('token', token, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === 'production',
//     sameSite: 'strict',
//     maxAge: 30 * 24 * 60 * 60, // 30 days
//     path: '/',
//   });
// };

export const setToken = (response, token) => {
  response.cookies.set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    path: '/',
  });
};

export const getUserIdFromToken = async () => {
  const token = getToken();
  if (!token) return null;

  try {
    const decoded = await verifyToken(token);
    return decoded.userId;
  } catch (error) {
    return null;
  }
};


// export const removeToken = () => {
//   const cookieStore = cookies();
//   cookieStore.delete('token');
// };

export const removeToken = (response) => {
  response.cookies.delete('token');
};


export const verifyToken = async (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    throw new Error('Invalid token');
  }
};

export const getToken = () => {
  const cookieStore = cookies();
  return cookieStore.get('token')?.value;
};
