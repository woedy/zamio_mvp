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
  PieChart as PieChartIcon,
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

// Recharts imports for interactive charts
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';

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
      <main className="w-full px-6 py-8 bg-gray-50/50 dark:bg-slate-900/50 min-h-screen">
        {/* Dashboard Header */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    ZamIO Admin Dashboard
                  </h1>
                  <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
                    Welcome back! Here's what's happening with your platform today.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="text-center lg:text-right">
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  {new Date().toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  {new Date().toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </div>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
                  Export Report
                </button>
                <button className="px-4 py-2 bg-white/80 dark:bg-slate-800/80 text-gray-700 dark:text-gray-300 rounded-lg font-medium border border-gray-200 dark:border-slate-600 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
                  Configure
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Key Platform Metrics Section */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500 rounded-lg flex items-center justify-center shadow-lg">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Platform Overview
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">
                    Key metrics and performance indicators for your music platform
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 dark:from-emerald-400 dark:to-emerald-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Export Data</span>
              </button>
              <button className="px-5 py-2.5 bg-white/60 dark:bg-slate-800/60 text-gray-700 dark:text-gray-300 rounded-lg font-medium border border-gray-200/50 dark:border-slate-600/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 backdrop-blur-sm">
                View Details
              </button>
            </div>
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
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 dark:from-violet-400 dark:to-purple-500 rounded-lg flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Analytics & Insights
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">
                    Deep dive into platform performance and user engagement metrics
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="px-5 py-2.5 bg-gradient-to-r from-violet-500 to-violet-600 dark:from-violet-400 dark:to-violet-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center space-x-2">
                <Eye className="w-4 h-4" />
                <span>View All</span>
              </button>
              <button className="px-5 py-2.5 bg-white/60 dark:bg-slate-800/60 text-gray-700 dark:text-gray-300 rounded-lg font-medium border border-gray-200/50 dark:border-slate-600/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 backdrop-blur-sm">
                Settings
              </button>
            </div>
          </div>

          {/* Main Content Grid - Full Width Layout */}
          <div className={`grid grid-cols-1 xl:grid-cols-4 gap-8`}>
            {/* Left Column - Enhanced Analytics */}
            <div className={`xl:col-span-3 space-y-8`}>
              {/* Enhanced Revenue Analytics Chart */}
              <Card className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-slate-700/30 p-8 hover:shadow-3xl hover:scale-[1.02] transition-all duration-500 group">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        Revenue Analytics
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        Monthly trends and growth patterns
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 text-white rounded-lg text-sm font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
                      Revenue
                    </button>
                    <button className="px-4 py-2 bg-white/60 dark:bg-slate-800/60 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-200/50 dark:border-slate-600/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 backdrop-blur-sm">
                      Growth
                    </button>
                  </div>
                </div>
                <div className="h-80 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-slate-800/30 dark:to-slate-700/30 rounded-xl"></div>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={revenueData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.9}/>
                          <stop offset="50%" stopColor="#6366F1" stopOpacity={0.6}/>
                          <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.2}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" opacity={0.3} />
                      <XAxis dataKey="month" stroke="#64748B" fontSize={12} tick={{ fill: '#64748B' }} />
                      <YAxis stroke="#64748B" fontSize={12} tickFormatter={(value) => `₵${value/1000}k`} tick={{ fill: '#64748B' }} />
                      <Tooltip
                        formatter={(value: number) => [`₵${value.toLocaleString()}`, 'Revenue']}
                        labelStyle={{ color: '#1E293B' }}
                        contentStyle={{
                          backgroundColor: 'rgba(255, 255, 255, 0.95)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '12px',
                          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                          fontSize: '14px'
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke="url(#gradient)"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorRevenue)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              {/* Enhanced Genre Distribution & Platform Performance */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-slate-700/30 p-8 hover:shadow-3xl hover:scale-[1.02] transition-all duration-500 group">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 dark:from-purple-400 dark:to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <PieChartIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                          Genre Distribution
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                          Music genre breakdown across the platform
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="h-64 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-slate-800/30 dark:to-slate-700/30 rounded-xl"></div>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={genreData}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, value }) => `${name}: ${value}%`}
                          labelLine={false}
                        >
                          {genreData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip
                          formatter={(value: number) => [`${value}%`, 'Distribution']}
                          contentStyle={{
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '12px',
                            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                            fontSize: '14px'
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-6">
                    {genreData.map((genre, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50/60 dark:bg-slate-700/40 rounded-lg hover:bg-gray-100/70 dark:hover:bg-slate-600/50 transition-all duration-200 group/item">
                        <div
                          className="w-4 h-4 rounded-full shadow-sm group-hover/item:scale-110 transition-transform duration-200"
                          style={{ backgroundColor: genre.color }}
                        ></div>
                        <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                          {genre.name}
                        </span>
                        <span className="text-sm text-gray-900 dark:text-white font-semibold ml-auto">
                          {genre.value}%
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-slate-700/30 p-8 hover:shadow-3xl hover:scale-[1.02] transition-all duration-500 group">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <BarChart3 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                          Platform Performance
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                          Real-time platform analytics and metrics
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="h-64 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-slate-800/30 dark:to-slate-700/30 rounded-xl"></div>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={revenueData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" opacity={0.3} />
                        <XAxis dataKey="month" stroke="#64748B" fontSize={12} tick={{ fill: '#64748B' }} />
                        <YAxis stroke="#64748B" fontSize={12} tickFormatter={(value) => `${value}`} tick={{ fill: '#64748B' }} />
                        <Tooltip
                          formatter={(value: number, name: string) => {
                            if (name === 'artists') return [value, 'Artists'];
                            if (name === 'stations') return [value, 'Stations'];
                            return [value, name];
                          }}
                          labelStyle={{ color: '#1E293B' }}
                          contentStyle={{
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '12px',
                            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                            fontSize: '14px'
                          }}
                        />
                        <Bar dataKey="artists" fill="#10B981" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="stations" fill="#F59E0B" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              </div>

              {/* Enhanced Platform Activity Feed */}
              <Card className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-slate-700/30 p-8 hover:shadow-3xl hover:scale-[1.02] transition-all duration-500 group">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 dark:from-violet-400 dark:to-purple-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        Platform Activity Feed
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        Real-time updates and system notifications
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <button className="px-4 py-2 bg-gradient-to-r from-violet-500 to-violet-600 dark:from-violet-400 dark:to-violet-500 text-white rounded-lg text-sm font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
                      Live
                    </button>
                    <button className="px-4 py-2 bg-white/60 dark:bg-slate-800/60 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-200/50 dark:border-slate-600/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 backdrop-blur-sm">
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
                        className={`flex items-start space-x-4 p-5 bg-gradient-to-r from-gray-50/60 to-gray-100/40 dark:from-slate-800/40 dark:to-slate-700/30 rounded-xl border border-gray-200/40 dark:border-slate-600/30 hover:from-violet-50/50 hover:to-purple-50/50 dark:hover:from-slate-600/50 dark:hover:to-slate-700/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 cursor-pointer group`}
                      >
                        <div className={`p-3 rounded-xl ${statusColors.bg} ${statusColors.border} ${statusColors.text} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          {getStatusIcon(activity.type)}
                        </div>
                        <div className="flex-1">
                          <div className="text-gray-900 dark:text-white font-semibold text-lg group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300 mb-1">
                            {activity.description}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                            {activity.time}
                          </div>
                        </div>
                        <div className="text-right">
                          {activity.amount && (
                            <div className="text-green-600 dark:text-green-400 font-bold text-lg mb-1">
                              ₵{activity.amount.toLocaleString()}
                            </div>
                          )}
                          <div className={`text-sm ${statusColors.text} capitalize font-semibold px-3 py-1 rounded-full bg-white/50 dark:bg-slate-800/50`}>
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
              <Card className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-slate-700/30 p-8 hover:shadow-3xl hover:scale-[1.02] transition-all duration-500 group">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 dark:from-amber-400 dark:to-orange-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        Top Earning Artists
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        Highest performing artists this month
                      </p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-500 text-white rounded-lg text-sm font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center space-x-2">
                    <Eye className="w-4 h-4" />
                    <span>View All</span>
                  </button>
                </div>
                <div className="space-y-4">
                  {topEarners.map((artist, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-5 bg-gradient-to-r from-gray-50/60 to-amber-50/40 dark:from-slate-800/40 dark:to-slate-700/30 rounded-xl border border-gray-200/40 dark:border-slate-600/30 hover:from-amber-50/50 hover:to-orange-50/50 dark:hover:from-slate-600/50 dark:hover:to-slate-700/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 cursor-pointer group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="bg-gradient-to-r from-amber-500 to-orange-500 dark:from-amber-400 dark:to-orange-400 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 dark:text-white text-lg group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
                            {artist.name}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-300 font-medium group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                            {artist.plays.toLocaleString()} plays
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-gray-900 dark:text-white font-bold text-lg group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
                          ₵{artist.totalEarnings.toLocaleString()}
                        </div>
                        <div className="text-sm text-green-600 dark:text-green-400 font-semibold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          ↑ {artist.growth}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Enhanced System Health Monitor */}
              <Card className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-slate-700/30 p-8 hover:shadow-3xl hover:scale-[1.02] transition-all duration-500 group">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        System Health
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        Real-time system performance metrics
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="flex items-center justify-between p-5 bg-gradient-to-r from-gray-50/60 to-emerald-50/40 dark:from-slate-800/40 dark:to-slate-700/30 rounded-xl border border-gray-200/40 dark:border-slate-600/30 hover:bg-emerald-50/70 dark:hover:bg-slate-600/50 transition-all duration-200 group/item">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                      <span className="text-gray-700 dark:text-gray-300 font-semibold">API Performance</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold text-lg">{platformStats.systemHealth}%</span>
                      <div className="w-20 h-3 bg-gray-200 dark:bg-slate-600 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-r from-emerald-500 to-green-500 rounded-full transition-all duration-500"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-5 bg-gradient-to-r from-gray-50/60 to-blue-50/40 dark:from-slate-800/40 dark:to-slate-700/30 rounded-xl border border-gray-200/40 dark:border-slate-600/30 hover:bg-blue-50/70 dark:hover:bg-slate-600/50 transition-all duration-200 group/item">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-gray-700 dark:text-gray-300 font-semibold">Database Load</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">73%</span>
                      <div className="w-20 h-3 bg-gray-200 dark:bg-slate-600 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-500"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-5 bg-gradient-to-r from-gray-50/60 to-green-50/40 dark:from-slate-800/40 dark:to-slate-700/30 rounded-xl border border-gray-200/40 dark:border-slate-600/30 hover:bg-green-50/70 dark:hover:bg-slate-600/50 transition-all duration-200 group/item">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-gray-700 dark:text-gray-300 font-semibold">
                        Payment Processing
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-600 dark:text-green-400 font-bold text-lg">Active</span>
                      <div className="w-20 h-3 bg-gray-200 dark:bg-slate-600 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Enhanced Quick Admin Actions */}
              <Card className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-slate-700/30 p-8 hover:shadow-3xl hover:scale-[1.02] transition-all duration-500 group">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 dark:from-pink-400 dark:to-purple-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Settings className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        Quick Actions
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        Essential admin tools and shortcuts
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-3 group hover:from-purple-600 hover:to-pink-600">
                    <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>Export Reports</span>
                  </button>
                  <button className="w-full bg-white/60 dark:bg-slate-800/60 text-gray-700 dark:text-gray-300 py-4 px-6 rounded-xl font-semibold border border-gray-200/50 dark:border-slate-600/50 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-3 group backdrop-blur-sm hover:bg-white/80 dark:hover:bg-slate-700/80">
                    <Settings className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>System Settings</span>
                  </button>
                  <button className="w-full bg-white/60 dark:bg-slate-800/60 text-gray-700 dark:text-gray-300 py-4 px-6 rounded-xl font-semibold border border-gray-200/50 dark:border-slate-600/50 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-3 group backdrop-blur-sm hover:bg-white/80 dark:hover:bg-slate-700/80">
                    <Shield className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>Security Center</span>
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