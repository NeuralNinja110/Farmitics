import React from 'react';
import { Notebook as Robot, QrCode, Settings2, AlertCircle } from 'lucide-react';

export function Control() {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Equipment Hub
        </h2>
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          Control and monitor your farming equipment
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <Robot className="h-6 w-6 text-green-600 dark:text-green-500" />
            <h3 className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">
              Equipment Status
            </h3>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Monitor your connected equipment
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <QrCode className="h-6 w-6 text-green-600 dark:text-green-500" />
            <h3 className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">
              Add Equipment
            </h3>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Connect new equipment via QR code
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <Settings2 className="h-6 w-6 text-green-600 dark:text-green-500" />
            <h3 className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">
              Control Panel
            </h3>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Manage and control your equipment
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <AlertCircle className="h-6 w-6 text-green-600 dark:text-green-500" />
            <h3 className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">
              AI Suggestions
            </h3>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            View and approve AI-recommended actions
          </p>
        </div>
      </div>
    </div>
  );
}