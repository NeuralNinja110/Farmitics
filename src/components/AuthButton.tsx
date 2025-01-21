import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTranslation } from 'react-i18next';
import { LogIn, LogOut } from 'lucide-react';

export function AuthButton() {
  const { user, signIn, signOut } = useAuth();
  const { t } = useTranslation();

  return (
    <button
      onClick={user ? signOut : signIn}
      className="flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
    >
      {user ? (
        <>
          <LogOut className="w-4 h-4 mr-2" />
          {t('signOut')}
        </>
      ) : (
        <>
          <LogIn className="w-4 h-4 mr-2" />
          {t('signIn')}
        </>
      )}
    </button>
  );
}