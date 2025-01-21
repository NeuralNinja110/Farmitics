import React from 'react';
import { LineChart, Cloud, Sprout, TrendingUp } from 'lucide-react';

export function Insight() {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          AI Insights
        </h2>
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          Smart recommendations for your farm
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <Sprout className="h-6 w-6 text-green-600 dark:text-green-500" />
            <h3 className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">
              Crop Recommendations
            </h3>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            AI-powered suggestions based on your soil and climate
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-500" />
            <h3 className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">
              Market Trends
            </h3>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Price predictions and market analysis
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <Cloud className="h-6 w-6 text-green-600 dark:text-green-500" />
            <h3 className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">
              Weather Forecast
            </h3>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Detailed weather predictions for your location
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <LineChart className="h-6 w-6 text-green-600 dark:text-green-500" />
            <h3 className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">
              Analytics
            </h3>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Detailed analysis of your farm's performance
          </p>
        </div>
      </div>
    </div>
  );
}