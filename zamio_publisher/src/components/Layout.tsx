import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '@zamio/ui';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-6xl mx-auto p-6 flex gap-6">
        <aside className="w-64 hidden md:block">
          <div className="p-4 sticky top-6 space-y-4">
            <div className="text-xl font-bold">Zamio</div>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Landing</Link>
              <Link to="/signin" className="px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Sign In</Link>
              <Link to="/dashboard" className="px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Dashboard</Link>
            </nav>
          </div>
        </aside>
        <main className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <div></div>
            <div className="flex items-center gap-3">
              <div className="text-sm text-gray-500">Demo</div>
              <div className="p-1">
                <ThemeToggle />
              </div>
            </div>
          </div>
          {/* Outlet for nested routes will go here when we add them */}
        </main>
      </div>
    </div>
  );
}
