import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Plane as Plant, Users, ShoppingCart, LineChart, Cpu, Notebook as Robot, BookOpen, User } from 'lucide-react';
import { cn } from '../../lib/utils';
import { AuthButton } from '../AuthButton';
import { UserProfile } from '../UserProfile';

const navigation = [
  { name: 'Home', href: '/', icon: Plant },
  { name: 'Social', href: '/social', icon: Users },
  { name: 'Trade', href: '/trade', icon: ShoppingCart },
  { name: 'Insight', href: '/insight', icon: LineChart },
  { name: 'Devices', href: '/devices', icon: Cpu },
  { name: 'Control', href: '/control', icon: Robot },
  { name: 'Learn', href: '/learn', icon: BookOpen },
  { name: 'Profile', href: '/profile', icon: User },
];

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Plant className="h-8 w-8 text-green-600 dark:text-green-500" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">Farmitics</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      'inline-flex items-center px-1 pt-1 text-sm font-medium',
                      location.pathname === item.href
                        ? 'text-green-600 dark:text-green-500 border-b-2 border-green-600 dark:border-green-500'
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                    )}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <UserProfile />
            <AuthButton />
          </div>
        </div>
      </div>
    </nav>
  );
}