import React from 'react';
import { MessageCircle, Bell, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Sidebar() {
  return (
    <div className="hidden lg:flex lg:flex-col lg:w-16 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200 lg:bg-white lg:dark:bg-gray-800 lg:dark:border-gray-700">
      <div className="flex-1 flex flex-col justify-center space-y-8">
        <Link
          to="/chat"
          className="flex items-center justify-center h-12 w-12 rounded-lg mx-auto text-gray-500 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-500 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <MessageCircle className="h-6 w-6" />
        </Link>
        <Link
          to="/notifications"
          className="flex items-center justify-center h-12 w-12 rounded-lg mx-auto text-gray-500 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-500 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <Bell className="h-6 w-6" />
        </Link>
        <Link
          to="/help"
          className="flex items-center justify-center h-12 w-12 rounded-lg mx-auto text-gray-500 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-500 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <HelpCircle className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
}