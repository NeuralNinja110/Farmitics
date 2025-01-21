import React from 'react';
import { ShoppingCart, Tag, MessageCircle } from 'lucide-react';

export function Trade() {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Bargain Center
        </h2>
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          Buy, sell, and trade farming supplies
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <ShoppingCart className="h-6 w-6 text-green-600 dark:text-green-500" />
            <h3 className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">
              Marketplace
            </h3>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Browse products and services
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <Tag className="h-6 w-6 text-green-600 dark:text-green-500" />
            <h3 className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">
              My Listings
            </h3>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Manage your product listings
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <MessageCircle className="h-6 w-6 text-green-600 dark:text-green-500" />
            <h3 className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">
              Negotiations
            </h3>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            View active bargaining sessions
          </p>
        </div>
      </div>
    </div>
  );
}