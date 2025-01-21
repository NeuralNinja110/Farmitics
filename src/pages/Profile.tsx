import React from 'react';
import { User, Settings, Shield, Globe } from 'lucide-react';

export function Profile() {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Profile Settings
        </h2>
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          Manage your account and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <User className="h-6 w-6 text-green-600 dark:text-green-500" />
            <h3 className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">
              Personal Information
            </h3>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Update your profile details
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <Settings className="h-6 w-6 text-green-600 dark:text-green-500" />
            <h3 className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">
              Preferences
            </h3>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Customize your app experience
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <Shield className="h-6 w-6 text-green-600 dark:text-green-500" />
            <h3 className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">
              Security
            </h3>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Manage security settings
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <Globe className="h-6 w-6 text-green-600 dark:text-green-500" />
            <h3 className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">
              Language & Region
            </h3>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Set your language preferences
          </p>
        </div>
      </div>
    </div>
  );
}