import React from 'react';
import { Card } from '@zamio/ui';
import {
  Users,
  Music,
  DollarSign,
  TrendingUp,
  FileText,
  Activity,
  Calendar,
  Award
} from 'lucide-react';

export default function Dashboard() {
  // Mock data for publisher dashboard
  const stats = [
    {
      title: 'Total Artists',
      value: '47',
      change: '+3 this month',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20'
    },
    {
      title: 'Active Catalog',
      value: '1,234',
      change: '+89 this month',
      icon: Music,
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/20'
    },
    {
      title: 'Monthly Revenue',
      value: '$45,231',
      change: '+12.5% vs last month',
      icon: DollarSign,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100 dark:bg-emerald-900/20'
    },
    {
      title: 'Performance Score',
      value: '94%',
      change: '+2.1% vs last month',
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/20'
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'contract',
      title: 'New Artist Contract Signed',
      description: 'Sarah Johnson joined your label',
      time: '2 hours ago',
      icon: FileText
    },
    {
      id: 2,
      type: 'release',
      title: 'New Release Published',
      description: '"Midnight Dreams" by Alex Chen',
      time: '4 hours ago',
      icon: Music
    },
    {
      id: 3,
      type: 'payment',
      title: 'Royalty Payment Processed',
      description: '$2,340 distributed to 23 artists',
      time: '1 day ago',
      icon: DollarSign
    },
    {
      id: 4,
      type: 'achievement',
      title: 'Milestone Reached',
      description: '1M total streams across catalog',
      time: '2 days ago',
      icon: Award
    }
  ];

  const topArtists = [
    { name: 'Sarah Johnson', streams: '245K', revenue: '$3,240', trend: '+12%' },
    { name: 'Alex Chen', streams: '189K', revenue: '$2,890', trend: '+8%' },
    { name: 'Maria Rodriguez', streams: '156K', revenue: '$2,130', trend: '+15%' }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome back, Publisher!</h1>
        <p className="text-green-100">Here's what's happening with your music publishing today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">{stat.change}</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h3>
              <Activity className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <activity.icon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{activity.title}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{activity.description}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Top Artists */}
        <div>
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Top Artists</h3>
              <Users className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {topArtists.map((artist, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{artist.name}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{artist.streams} streams</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{artist.revenue}</p>
                    <p className={`text-xs ${artist.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {artist.trend}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors text-center">
            <Users className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <span className="text-sm font-medium text-green-700 dark:text-green-300">Add Artist</span>
          </button>
          <button className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors text-center">
            <Music className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Upload Track</span>
          </button>
          <button className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors text-center">
            <FileText className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">New Contract</span>
          </button>
          <button className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors text-center">
            <Calendar className="w-6 h-6 text-orange-600 mx-auto mb-2" />
            <span className="text-sm font-medium text-orange-700 dark:text-orange-300">Schedule Release</span>
          </button>
        </div>
      </Card>
    </div>
  );
}