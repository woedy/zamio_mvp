import React, { useState } from 'react';
import {
  Users,
  Radio,
  TrendingUp,
  DollarSign,
  Shield,
  AlertTriangle,
  Clock,
  BarChart3,
  PieChart,
  Globe,
  Database,
  Settings,
  Bell,
  Search,
  Download,
  Eye,
  UserCheck,
  Disc,
  CreditCard,
  Activity,
  Wallet,
  Award,
  UserPlus,
  BellRing,
  Home,
  Building,
  FileText,
  Target,
  ChevronRight,
  Menu,
  X,
  LogOut,
  User,
  Music,
  MapPin,
  Award as AwardIcon,
  Target as TargetIcon,
} from 'lucide-react';

// Import the UI components
import { Card } from '@zamio/ui';
import Layout from '../components/Layout';

const ZamioAdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Admin-specific data structure
  const [platformStats, setPlatformStats] = useState({
    totalStations: 127,
    totalArtists: 8943,
    totalSongs: 45234,
    totalPlays: 2847293,
    totalRoyalties: 1247893.45,
    pendingPayments: 89234.12,
    activeDistributors: 34,
    monthlyGrowth: 18.5,
    systemHealth: 98.7,
    pendingDisputes: 12,
  });

  const [recentActivity, setRecentActivity] = useState([
    {
      id: 1,
      type: 'payment',
      description: 'Royalty payment processed for Sarkodie',
      amount: 2847.5,
      time: '2 mins ago',
      status: 'completed',
    },
    {
      id: 2,
      type: 'registration',
      description: 'New artist registered: Amaarae',
      time: '15 mins ago',
      status: 'pending',
    },
    {
      id: 3,
      type: 'dispute',
      description: 'Copyright dispute filed for "Kpoo Keke"',
      time: '1 hour ago',
      status: 'urgent',
    },
    {
      id: 4,
      type: 'station',
      description: 'Peace FM updated playlist',
      time: '2 hours ago',
      status: 'completed',
    },
    {
      id: 5,
      type: 'distribution',
      description: 'New release distributed: "Enjoyment"',
      time: '3 hours ago',
      status: 'completed',
    },
  ]);

  const [topEarners, setTopEarners] = useState([
    { name: 'Sarkodie', totalEarnings: 45234.8, plays: 234567, growth: 12.5 },
    { name: 'Shatta Wale', totalEarnings: 38945.2, plays: 198432, growth: 8.3 },
    { name: 'Kuami Eugene', totalEarnings: 29876.4, plays: 167890, growth: 15.2 },
    { name: 'Stonebwoy', totalEarnings: 27543.1, plays: 156234, growth: 6.7 },
    { name: 'King Promise', totalEarnings: 23456.9, plays: 143567, growth: 9.8 },
  ]);

  const [revenueData, setRevenueData] = useState([
    { month: 'Jan', revenue: 45000, artists: 320, stations: 15 },
    { month: 'Feb', revenue: 52000, artists: 380, stations: 18 },
    { month: 'Mar', revenue: 61000, artists: 445, stations: 22 },
    { month: 'Apr', revenue: 58000, artists: 510, stations: 25 },
    { month: 'May', revenue: 72000, artists: 580, stations: 28 },
    { month: 'Jun', revenue: 85000, artists: 650, stations: 32 },
    { month: 'Jul', revenue: 95000, artists: 720, stations: 35 },
  ]);

  const [genreData, setGenreData] = useState([
    { name: 'Afrobeats', value: 35, color: '#8B5CF6' },
    { name: 'Hiplife', value: 28, color: '#EC4899' },
    { name: 'Gospel', value: 18, color: '#10B981' },
    { name: 'Highlife', value: 12, color: '#F59E0B' },
    { name: 'Drill', value: 7, color: '#EF4444' },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return { bg: 'bg-green-50 dark:bg-green-900/20', border: 'border-green-200 dark:border-green-800', text: 'text-green-700 dark:text-green-300' };
      case 'pending':
        return { bg: 'bg-yellow-50 dark:bg-yellow-900/20', border: 'border-yellow-200 dark:border-yellow-800', text: 'text-yellow-700 dark:text-yellow-300' };
      case 'urgent':
        return { bg: 'bg-red-50 dark:bg-red-900/20', border: 'border-red-200 dark:border-red-800', text: 'text-red-700 dark:text-red-300' };
      case 'warning':
        return { bg: 'bg-orange-50 dark:bg-orange-900/20', border: 'border-orange-200 dark:border-orange-800', text: 'text-orange-700 dark:text-orange-300' };
      default:
        return { bg: 'bg-gray-50 dark:bg-gray-900/20', border: 'border-gray-200 dark:border-gray-800', text: 'text-gray-700 dark:text-gray-300' };
    }
  };

  const getStatusIcon = (type: string) => {
    switch (type) {
      case 'payment':
        return <CreditCard className="w-4 h-4" />;
      case 'registration':
        return <UserPlus className="w-4 h-4" />;
      case 'dispute':
        return <AlertTriangle className="w-4 h-4" />;
      case 'station':
        return <Radio className="w-4 h-4" />;
      case 'distribution':
        return <Disc className="w-4 h-4" />;
      default:
        return <Activity className="w-4 h-4" />;
    }
  };

  // Dashboard content component that receives activeTab as prop
  const DashboardContent = ({ activeTab }: { activeTab: string }) => {
    return (
      <main className="w-full px-6 py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                ZamIO Admin Dashboard
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Welcome back! Here's what's happening with your platform today.
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {new Date().toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white">
                {new Date().toLocaleTimeString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Key Platform Metrics Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                <BarChart3 className="w-6 h-6 mr-3 text-blue-500 dark:text-blue-400" />
                Platform Overview
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Key metrics and performance indicators for your music platform
              </p>
            </div>
            <button className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200">
              View Detailed Report
            </button>
          </div>

          {/* Key Platform Metrics - Enhanced Design */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`}>
            {/* Active Stations Card */}
            <Card className="bg-gradient-to-br from-blue-50/90 via-cyan-50/80 to-indigo-50/90 dark:from-slate-900/95 dark:via-slate-800/90 dark:to-slate-900/95 backdrop-blur-sm rounded-xl shadow-lg border border-blue-200/50 dark:border-slate-600/60 p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700/70 group cursor-pointer">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-normal text-gray-700 dark:text-slate-300 leading-relaxed">Active Stations</p>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-slate-100 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {platformStats.totalStations}
                  </p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/60 dark:to-cyan-900/60 rounded-lg flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <Radio className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <div className="flex items-center mr-2">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                </div>
                <span className="text-green-600 dark:text-green-400">+8.2%</span>
                <span className="text-gray-500 dark:text-gray-400 ml-2">from last month</span>
              </div>
              <div className="mt-3">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-gray-500 dark:text-gray-400">Monthly Target</span>
                  <span className="text-gray-600 dark:text-gray-300 font-medium">
                    {platformStats.totalStations} / 150
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min((platformStats.totalStations / 150) * 100, 100)}%` }}
                  />
                </div>
              </div>
            </Card>

            {/* Registered Artists Card */}
            <Card className="bg-gradient-to-br from-emerald-50/90 via-green-50/80 to-teal-50/90 dark:from-slate-900/95 dark:via-slate-800/90 dark:to-slate-900/95 backdrop-blur-sm rounded-xl shadow-lg border border-emerald-200/50 dark:border-slate-600/60 p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 hover:border-emerald-300 dark:hover:border-emerald-700/70 group cursor-pointer">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-normal text-gray-700 dark:text-slate-300 leading-relaxed">Registered Artists</p>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-slate-100 leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                    {platformStats.totalArtists.toLocaleString()}
                  </p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/60 dark:to-green-900/60 rounded-lg flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <div className="flex items-center mr-2">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                </div>
                <span className="text-green-600 dark:text-green-400">+{platformStats.monthlyGrowth}%</span>
                <span className="text-gray-500 dark:text-gray-400 ml-2">growth</span>
              </div>
              <div className="mt-3">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-gray-500 dark:text-gray-400">Monthly Target</span>
                  <span className="text-gray-600 dark:text-gray-300 font-medium">
                    {platformStats.totalArtists.toLocaleString()} / 10,000
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-emerald-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min((platformStats.totalArtists / 10000) * 100, 100)}%` }}
                  />
                </div>
              </div>
            </Card>

            {/* Total Royalties Card */}
            <Card className="bg-gradient-to-br from-purple-50/90 via-violet-50/80 to-indigo-50/90 dark:from-slate-900/95 dark:via-slate-800/90 dark:to-slate-900/95 backdrop-blur-sm rounded-xl shadow-lg border border-purple-200/50 dark:border-slate-600/60 p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-700/70 group cursor-pointer">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-normal text-gray-700 dark:text-slate-300 leading-relaxed">Total Royalties</p>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-slate-100 leading-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    ₵{platformStats.totalRoyalties.toLocaleString()}
                  </p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/60 dark:to-indigo-900/60 rounded-lg flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <div className="flex items-center mr-2">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                </div>
                <span className="text-green-600 dark:text-green-400">+15.3%</span>
                <span className="text-gray-500 dark:text-gray-400 ml-2">this month</span>
              </div>
              <div className="mt-3">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-gray-500 dark:text-gray-400">Monthly Target</span>
                  <span className="text-gray-600 dark:text-gray-300 font-medium">
                    ₵{platformStats.totalRoyalties.toLocaleString()} / ₵1,500,000
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min((platformStats.totalRoyalties / 1500000) * 100, 100)}%` }}
                  />
                </div>
              </div>
            </Card>

            {/* Pending Payments Card */}
            <Card className="bg-gradient-to-br from-amber-50/90 via-orange-50/80 to-yellow-50/90 dark:from-slate-900/95 dark:via-slate-800/90 dark:to-slate-900/95 backdrop-blur-sm rounded-xl shadow-lg border border-amber-200/50 dark:border-slate-600/60 p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 hover:border-amber-300 dark:hover:border-amber-700/70 group cursor-pointer">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-normal text-gray-700 dark:text-slate-300 leading-relaxed">Pending Payments</p>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-slate-100 leading-tight group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
                    ₵{platformStats.pendingPayments.toLocaleString()}
                  </p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/60 dark:to-orange-900/60 rounded-lg flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">Requires attention</span>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${platformStats.pendingDisputes > 10 ? 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800' : 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800'}`}>
                  {platformStats.pendingDisputes > 10 ? 'Urgent' : 'Normal'}
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Analytics & Insights Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                <TrendingUp className="w-6 h-6 mr-3 text-emerald-500 dark:text-emerald-400" />
                Analytics & Insights
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Deep dive into platform performance and user engagement metrics
              </p>
            </div>
            <div className="flex space-x-3">
              <button className="px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-lg border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors duration-200">
                Export Data
              </button>
              <button className="px-4 py-2 bg-slate-50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-600/70 transition-colors duration-200">
                Configure
              </button>
            </div>
          </div>

          {/* Main Content Grid - Full Width Layout */}
          <div className={`grid grid-cols-1 xl:grid-cols-4 gap-8`}>
            {/* Left Column - Enhanced Analytics */}
            <div className={`xl:col-span-3 space-y-8`}>
              {/* Enhanced Revenue Analytics Chart */}
              <Card className="bg-gradient-to-br from-blue-50/90 via-cyan-50/80 to-indigo-50/90 dark:from-slate-900/95 dark:via-slate-800/90 dark:to-slate-900/95 backdrop-blur-sm rounded-xl shadow-lg border border-blue-200/50 dark:border-slate-600/60 p-6 hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-blue-500 dark:text-blue-400" />
                    Revenue Analytics
                  </h3>
                  <div className="flex space-x-2">
                    <button className="px-3 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium border border-blue-200 dark:border-blue-800 hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-all duration-200">
                      Revenue
                    </button>
                    <button className="px-3 py-2 bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-600/70 transition-all duration-200">
                      Growth
                    </button>
                  </div>
                </div>
                <div className="h-80">
                  <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
                    <div className="text-center">
                      <BarChart3 className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p className="text-sm font-medium">Interactive Revenue Chart</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500">Monthly trends and growth patterns</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Enhanced Genre Distribution & Platform Performance */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-purple-50/90 via-pink-50/80 to-rose-50/90 dark:from-slate-900/95 dark:via-slate-800/90 dark:to-slate-900/95 backdrop-blur-sm rounded-xl shadow-lg border border-purple-200/50 dark:border-slate-600/60 p-6 hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-slate-100 flex items-center">
                      <PieChart className="w-5 h-5 mr-2 text-purple-500 dark:text-purple-400" />
                      Genre Distribution
                    </h3>
                  </div>
                  <div className="h-64">
                    <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
                      <div className="text-center">
                        <PieChart className="w-12 h-12 mx-auto mb-2 opacity-50" />
                        <p className="text-sm font-medium">Interactive Genre Chart</p>
                        <p className="text-xs text-gray-400 dark:text-gray-500">Music genre breakdown</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {genreData.map((genre, index) => (
                      <div key={index} className="flex items-center space-x-2 p-2 bg-gray-50/50 dark:bg-slate-700/30 rounded-lg hover:bg-gray-100/70 dark:hover:bg-slate-600/50 transition-colors duration-200">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: genre.color }}
                        ></div>
                        <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                          {genre.name}
                        </span>
                        <span className="text-sm text-gray-900 dark:text-white font-semibold">
                          {genre.value}%
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="bg-gradient-to-br from-emerald-50/90 via-green-50/80 to-teal-50/90 dark:from-slate-900/95 dark:via-slate-800/90 dark:to-slate-900/95 backdrop-blur-sm rounded-xl shadow-lg border border-emerald-200/50 dark:border-slate-600/60 p-6 hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-slate-100 flex items-center">
                      <BarChart3 className="w-5 h-5 mr-2 text-emerald-500 dark:text-emerald-400" />
                      Platform Performance
                    </h3>
                  </div>
                  <div className="h-64">
                    <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
                      <div className="text-center">
                        <BarChart3 className="w-12 h-12 mx-auto mb-2 opacity-50" />
                        <p className="text-sm font-medium">Performance Metrics</p>
                        <p className="text-xs text-gray-400 dark:text-gray-500">Real-time platform analytics</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Enhanced Platform Activity Feed */}
              <Card className="bg-gradient-to-br from-violet-50/90 via-purple-50/80 to-indigo-50/90 dark:from-slate-900/95 dark:via-slate-800/90 dark:to-slate-900/95 backdrop-blur-sm rounded-xl shadow-lg border border-violet-200/50 dark:border-slate-600/60 p-6 hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100 flex items-center">
                    <Activity className="w-5 h-5 mr-2 text-violet-500 dark:text-violet-400" />
                    Platform Activity Feed
                  </h3>
                  <div className="flex space-x-2">
                    <button className="px-3 py-2 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-lg text-sm font-medium border border-violet-200 dark:border-violet-800 hover:bg-violet-200 dark:hover:bg-violet-800/50 transition-all duration-200">
                      Live
                    </button>
                    <button className="px-3 py-2 bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-600/70 transition-all duration-200">
                      All
                    </button>
                  </div>
                </div>
                <div className="space-y-4">
                  {recentActivity.map((activity) => {
                    const statusColors = getStatusColor(activity.status);
                    return (
                      <div
                        key={activity.id}
                        className={`flex items-start space-x-4 p-4 bg-gray-50/80 dark:bg-slate-700/60 rounded-xl border border-gray-200/60 dark:border-slate-600/40 hover:bg-gradient-to-r hover:from-violet-50/50 hover:to-purple-50/50 dark:hover:from-slate-600/50 dark:hover:to-slate-700/50 hover:scale-[1.02] hover:shadow-md transition-all duration-300 cursor-pointer group`}
                      >
                        <div className={`p-2 rounded-lg ${statusColors.bg} ${statusColors.border} ${statusColors.text} group-hover:scale-110 transition-transform duration-300`}>
                          {getStatusIcon(activity.type)}
                        </div>
                        <div className="flex-1">
                          <div className="text-gray-900 dark:text-white font-medium group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                            {activity.description}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {activity.time}
                          </div>
                        </div>
                        <div className="text-right">
                          {activity.amount && (
                            <div className="text-green-600 dark:text-green-400 font-semibold">
                              ₵{activity.amount}
                            </div>
                          )}
                          <div className={`text-xs ${statusColors.text} capitalize font-medium`}>
                            {activity.status}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>

            {/* Right Column - Enhanced Sidebar Widgets */}
            <div className="space-y-8">
              {/* Enhanced Top Earning Artists */}
              <Card className="bg-gradient-to-br from-amber-50/90 via-yellow-50/80 to-orange-50/90 dark:from-slate-900/95 dark:via-slate-800/90 dark:to-slate-900/95 backdrop-blur-sm rounded-xl shadow-lg border border-amber-200/50 dark:border-slate-600/60 p-6 hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-amber-500 dark:text-amber-400" />
                    Top Earning Artists
                  </h3>
                  <button className="text-sm text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 flex items-center font-medium transition-colors duration-300 border border-transparent hover:border-amber-200 dark:hover:border-amber-800 px-3 py-1 rounded-lg hover:bg-amber-50 dark:hover:bg-amber-900/20">
                    View All <Eye className="w-4 h-4 ml-1" />
                  </button>
                </div>
                <div className="space-y-4">
                  {topEarners.map((artist, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50/80 dark:bg-slate-700/60 rounded-xl border border-gray-200/60 dark:border-slate-600/40 hover:bg-gradient-to-r hover:from-amber-50/50 hover:to-orange-50/50 dark:hover:from-slate-600/50 dark:hover:to-slate-700/50 hover:scale-[1.02] hover:shadow-md transition-all duration-300 cursor-pointer group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="bg-gradient-to-r from-amber-500 to-orange-500 dark:from-amber-400 dark:to-orange-400 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform duration-300 shadow-md">
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                            {artist.name}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                            {artist.plays.toLocaleString()} plays
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-gray-900 dark:text-white font-semibold group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                          ₵{artist.totalEarnings.toLocaleString()}
                        </div>
                        <div className="text-xs text-green-600 dark:text-green-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          ↑ {artist.growth}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Enhanced System Health Monitor */}
              <Card className="bg-gradient-to-br from-emerald-50/90 via-green-50/80 to-teal-50/90 dark:from-slate-900/95 dark:via-slate-800/90 dark:to-slate-900/95 backdrop-blur-sm rounded-xl shadow-lg border border-emerald-200/50 dark:border-slate-600/60 p-6 hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100 flex items-center">
                    <Database className="w-5 h-5 mr-2 text-emerald-500 dark:text-emerald-400" />
                    System Health
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50/50 dark:bg-slate-700/30 rounded-lg hover:bg-gray-100/70 dark:hover:bg-slate-600/50 transition-colors duration-200">
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">API Performance</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">{platformStats.systemHealth}%</span>
                      <div className="w-16 h-2 bg-gray-200 dark:bg-slate-600 rounded-full">
                        <div className="w-full h-full bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50/50 dark:bg-slate-700/30 rounded-lg hover:bg-gray-100/70 dark:hover:bg-slate-600/50 transition-colors duration-200">
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Database Load</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">73%</span>
                      <div className="w-16 h-2 bg-gray-200 dark:bg-slate-600 rounded-full">
                        <div className="w-3/4 h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50/50 dark:bg-slate-700/30 rounded-lg hover:bg-gray-100/70 dark:hover:bg-slate-600/50 transition-colors duration-200">
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      Payment Processing
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-semibold text-green-600 dark:text-green-400">Active</span>
                      <div className="w-16 h-2 bg-gray-200 dark:bg-slate-600 rounded-full">
                        <div className="w-full h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Enhanced Quick Admin Actions */}
              <Card className="bg-gradient-to-br from-pink-50/90 via-rose-50/80 to-purple-50/90 dark:from-slate-900/95 dark:via-slate-800/90 dark:to-slate-900/95 backdrop-blur-sm rounded-xl shadow-lg border border-pink-200/50 dark:border-slate-600/60 p-6 hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100 mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center group hover:from-purple-600 hover:to-pink-600">
                    <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Export Reports
                  </button>
                  <button className="w-full bg-white/10 dark:bg-slate-700/60 text-gray-900 dark:text-white py-3 rounded-xl font-semibold border border-white/20 dark:border-slate-600/40 hover:bg-white/20 dark:hover:bg-slate-600/70 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center group">
                    <Settings className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    System Settings
                  </button>
                  <button className="w-full bg-white/10 dark:bg-slate-700/60 text-gray-900 dark:text-white py-3 rounded-xl font-semibold border border-white/20 dark:border-slate-600/40 hover:bg-white/20 dark:hover:bg-slate-600/70 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center group">
                    <Shield className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Security Center
                  </button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    );
  };

  return (
    <Layout>
      <DashboardContent activeTab={activeTab} />
    </Layout>
  );
};

export default ZamioAdminDashboard;