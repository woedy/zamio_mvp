import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from '@zamio/ui';
import {
  Home,
  BarChart3,
  Music,
  Radio,
  FileText,
  Search,
  AlertTriangle,
  User,
  Users,
  Shield,
  FileSearch,
  Bell,
  HelpCircle,
  Radio as RadioIcon,
  Headphones,
  Menu,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Dashboard from '../pages/Dashboard';

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const location = useLocation();

  // Check if current page is dashboard
  const isDashboard = location.pathname === '/dashboard';

  const navigation = [
    {
      name: 'Overview',
      href: '/dashboard',
      icon: Home,
      current: location.pathname === '/dashboard',
      description: 'Station dashboard and overview'
    },
    {
      name: 'Match Logs',
      href: '/match-logs',
      icon: Search,
      current: location.pathname === '/match-logs',
      description: 'View play history and logs'
    },
    {
      name: 'Disputes',
      href: '/match-disputes',
      icon: AlertTriangle,
      current: location.pathname === '/match-disputes',
      description: 'Match dispute management'
    },
    {
      name: 'Profile',
      href: '/profile',
      icon: User,
      current: location.pathname === '/profile',
      description: 'Manage station profile'
    },
    {
      name: 'Staff',
      href: '/staff-management',
      icon: Users,
      current: location.pathname === '/staff-management',
      description: 'Staff management and permissions'
    },
    {
      name: 'Compliance',
      href: '/compliance',
      icon: Shield,
      current: location.pathname === '/compliance',
      description: 'License and regulatory compliance'
    },
    {
      name: 'Playlogs',
      href: '/playlog-management',
      icon: FileSearch,
      current: location.pathname === '/playlog-management',
      description: 'Playlog management and reporting'
    },
    {
      name: 'Notifications',
      href: '/notifications',
      icon: Bell,
      current: location.pathname === '/notifications',
      description: 'View notifications and alerts'
    },
    {
      name: 'Help & Support',
      href: '/help',
      icon: HelpCircle,
      current: location.pathname === '/help',
      description: 'Get help and support'
    },
    {
      name: 'Radio Stream',
      href: '/radio-stream',
      icon: RadioIcon,
      current: location.pathname === '/radio-stream',
      description: 'Radio stream monitoring tools'
    },
    {
      name: 'Audio Stream',
      href: '/audio-stream',
      icon: Headphones,
      current: location.pathname === '/audio-stream',
      description: 'Audio file matching system'
    },
  ];

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleSidebarCollapse = () => setSidebarCollapsed(!sidebarCollapsed);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="flex min-h-screen overflow-hidden">
        {/* Fixed Sidebar */}
        <aside className={`${
          sidebarCollapsed ? 'w-20' : 'w-64'
        } bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-700 h-full flex flex-col fixed left-0 top-0 z-50`}>
          {/* Sidebar header */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2.5 rounded-xl shadow-lg">
                <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <Radio className="w-4 h-4 text-blue-600" />
                </div>
              </div>
              {!sidebarCollapsed && (
                <div>
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">Zamio</h2>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Stations</p>
                </div>
              )}
            </div>

            {/* Collapse button */}
            <button
              onClick={toggleSidebarCollapse}
              className="p-1.5 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-slate-800 transition-colors duration-200"
            >
              {sidebarCollapsed ? (
                <ChevronRight className="w-4 h-4" />
              ) : (
                <ChevronLeft className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto scrollbar-hide">
            {/* Main Navigation */}
            <div className="space-y-1">
              <div className={`px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider ${sidebarCollapsed ? 'text-center' : ''}`}>
                {sidebarCollapsed ? 'MENU' : 'Station Management'}
              </div>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    item.current
                      ? 'bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800 shadow-sm'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white border-transparent'
                  } group flex items-center px-3 py-3 text-sm font-medium rounded-xl border transition-all duration-200 ${sidebarCollapsed ? 'justify-center' : ''}`}
                  title={sidebarCollapsed ? item.name : undefined}
                >
                  <item.icon className={`${
                    item.current
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300'
                  } w-5 h-5 ${sidebarCollapsed ? '' : 'mr-3'} flex-shrink-0`} />
                  {!sidebarCollapsed && (
                    <div className="flex-1 min-w-0">
                      <div className="font-medium">{item.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                        {item.description}
                      </div>
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </nav>

          {/* Sidebar footer */}
          <div className="p-4 border-t border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800">
            <div className={`flex items-center space-x-3 ${sidebarCollapsed ? 'justify-center' : ''}`}>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                <span className="text-white text-sm font-semibold">ST</span>
              </div>
              {!sidebarCollapsed && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                    Demo Station
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                    Premium Station
                  </p>
                </div>
              )}
            </div>
          </div>
        </aside>

        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden"
            onClick={toggleSidebar}
          />
        )}

        {/* Main content */}
        <main className={`flex-1 min-w-0 ${sidebarCollapsed ? 'ml-20' : 'ml-64'} transition-all duration-300 overflow-y-auto`}>
          {/* Top header bar - show for all pages */}
          <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
            <div className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={toggleSidebar}
                    className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <Menu className="w-5 h-5" />
                  </button>
                  <div>
                    <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {navigation.find(item => item.current)?.name || 'Zamio Stations'}
                    </h1>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {isDashboard
                        ? 'Monitor your station\'s music performance and earnings'
                        : 'Manage your station\'s music monitoring and analytics'
                      }
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 relative">
                    <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                  </button>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>

          {/* Page content */}
          <div className="p-6">
            {isDashboard ? <Dashboard /> : <div>Content for other pages</div>}
          </div>
        </main>
      </div>
    </div>
  );
}
