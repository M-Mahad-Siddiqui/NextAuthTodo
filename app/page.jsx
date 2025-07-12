import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="mb-12">
            <div className="text-6xl mb-6">📝</div>
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Welcome to <span className="text-blue-600">Todo App</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Stay organized and boost your productivity with our simple yet powerful todo management system. 
              Create, manage, and track your tasks effortlessly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/login"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium text-lg"
              >
                Create Account
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">✅</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Simple Task Management</h3>
              <p className="text-gray-600">
                Create, edit, and delete tasks with ease. Mark them as complete when you're done.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">🔐</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Secure & Private</h3>
              <p className="text-gray-600">
                Your todos are private and secure. Only you can access your personal task list.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Track Progress</h3>
              <p className="text-gray-600">
                Monitor your productivity with built-in statistics and completion tracking.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-blue-600 text-white p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Organized?</h2>
            <p className="text-xl text-blue-100 mb-6">
              Join thousands of users who trust Todo App to manage their daily tasks.
            </p>
            <Link
              href="/register"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium text-lg inline-block"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}