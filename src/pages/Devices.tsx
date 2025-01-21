import React from 'react';
import { Cpu, WifiIcon, BarChart3, Share2 } from 'lucide-react';

export function Devices() {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Device Management
        </h2>
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          Monitor and manage your farming devices
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <Cpu className="h-6 w-6 text-green-600 dark:text-green-500" />
            <h3 className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">
              Connected Devices
            </h3>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            View and manage your IoT devices
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <WifiIcon className="h-6 w-6 text-green-600 dark:text-green-500" />
            <h3 className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">
              Device Status
            </h3>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Monitor device connectivity and health
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <BarChart3 className="h-6 w-6 text-green-600 dark:text-green-500" />
            <h3 className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">
              Data Analytics
            </h3>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            View sensor data and trends
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <Share2 className="h-6 w-6 text-green-600 dark:text-green-500" />
            <h3 className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">
              Data Sharing
            </h3>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Manage data sharing preferences
          </p>
        </div>
      </div>
    </div>
  );
}