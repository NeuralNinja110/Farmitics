import React from 'react';
import { BookOpen, Video, FileText, MessageSquare } from 'lucide-react';

export function Learn() {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Learning Hub
        </h2>
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          Educational resources and training materials
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <Video className="h-6 w-6 text-green-600 dark:text-green-500" />
            <h3 className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">
              Video Tutorials
            </h3>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Watch educational farming videos
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <FileText className="h-6 w-6 text-green-600 dark:text-green-500" />
            <h3 className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">
              Articles & Guides
            </h3>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Read farming techniques and tips
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <MessageSquare className="h-6 w-6 text-green-600 dark:text-green-500" />
            <h3 className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">
              Discussion Forum
            </h3>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Ask questions and share knowledge
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <BookOpen className="h-6 w-6 text-green-600 dark:text-green-500" />
            <h3 className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">
              Resource Library
            </h3>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Access farming documentation
          </p>
        </div>
      </div>
    </div>
  );
}