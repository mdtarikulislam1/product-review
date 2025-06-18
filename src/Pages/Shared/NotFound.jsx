import React from 'react';
import { Link } from 'react-router';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-gray-800 bg-white dark:bg-neutral-900 dark:text-gray-100">
      <h1 className="mb-4 text-6xl font-bold">404</h1>
      <h2 className="mb-2 text-2xl">Page Not Found</h2>
      <p className="max-w-md mb-6 text-lg text-center">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 text-white transition-all duration-200 bg-blue-600 rounded-xl hover:bg-blue-700"
      >
        Go back home
      </Link>
    </div>
  );
}
