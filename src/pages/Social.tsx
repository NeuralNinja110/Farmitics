import React from 'react';

export function Social() {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Farmer Network
        </h2>
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          Connect with farmers in your area
        </p>
      </div>

      {/* Nearby Farmers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Nearby Farmers
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Find and connect with farmers in your region
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Groups
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Join farming communities and discussion groups
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Activity Feed
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Stay updated with latest posts from your network
          </p>
        </div>
      </div>
    </div>
  );
}