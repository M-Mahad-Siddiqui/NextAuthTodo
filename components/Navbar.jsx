'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
      });
      router.push('/login');
      router.refresh();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <nav className="bg-blue-600 p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/todos" className="text-xl font-bold hover:text-blue-200 transition-colors">
          📝 Todo App
        </Link>
        <div className="flex space-x-4">
          <Link href="/todos" className="hover:text-blue-200 transition-colors">
            My Todos
          </Link>
          <button 
            onClick={handleLogout} 
            className="hover:text-blue-200 transition-colors bg-blue-700 px-3 py-1 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}