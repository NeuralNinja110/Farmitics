import React from 'react';
import { Navigation } from './Navigation';
import { Sidebar } from './Sidebar';
import { useLocation } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { LanguageSelector } from '../LanguageSelector';
import { useTranslation } from 'react-i18next';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 ${isDarkMode ? 'dark' : ''}`}>
      <Navigation />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {location.pathname === '/' ? t('dashboard') : t(location.pathname.split('/')[1])}
              </h1>
              <div className="flex items-center space-x-4">
                <LanguageSelector />
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  {isDarkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-500" />}
                </button>
              </div>
            </div>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}