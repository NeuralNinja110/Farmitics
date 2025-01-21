import React from 'react';
import { useAuth } from '../contexts/AuthContext';

export function UserProfile() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="flex items-center space-x-3">
      {user.user_metadata.avatar_url && (
        <img
          src={user.user_metadata.avatar_url}
          alt={user.user_metadata.full_name}
          className="w-8 h-8 rounded-full"
        />
      )}
      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
        {user.user_metadata.full_name}
      </span>
    </div>
  );
}