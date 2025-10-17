import React, { useState } from 'react';
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Play,
  Users,
  Globe,
  Music,
  Calendar,
  MapPin,
  Award,
  Target,
  Filter,
  Download,
  Share2,
  RefreshCw,
  Eye,
  Heart,
  Clock,
  Activity,
  PieChart,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  ChevronLeft,
  ChevronRight,
  Search
} from 'lucide-react';

// Mock analytics data
const analyticsData = {
  overview: {
    totalPlays: 1247000,
    totalRevenue: 23475.50,
    totalTracks: 12,
    totalAlbums: 5,
    activeListeners: 45670,
    growthRate: 12.5,
    previousPeriodGrowth: -2.1
  },
  monthlyPerformance: [
    { month: 'Jan', plays: 95000, revenue: 1425.00 },
    { month: 'Feb', plays: 102000, revenue: 1530.00 },
    { month: 'Mar', plays: 118000, revenue: 1770.00 },
    { month: 'Apr', plays: 125000, revenue: 1875.00 },
    { month: 'May', plays: 134000, revenue: 2010.00 },
    { month: 'Jun', plays: 145000, revenue: 2175.00 },
    { month: 'Jul', plays: 152000, revenue: 2280.00 },
    { month: 'Aug', plays: 168000, revenue: 2520.00 },
    { month: 'Sep', plays: 175000, revenue: 2625.00 },
    { month: 'Oct', plays: 189000, revenue: 2835.00 },
    { month: 'Nov', plays: 203000, revenue: 3045.00 },
    { month: 'Dec', plays: 215000, revenue: 3225.00 }
  ],
  topTracks: [
    { title: 'Ghana Na Woti', plays: 450000, revenue: 8750.00, growth: 15.2 },
    { title: 'Terminator', plays: 320000, revenue: 6240.00, growth: -3.1 },
    { title: 'Perfect Combi', plays: 280000, revenue: 5460.00, growth: 8.7 },
    { title: 'Paris', plays: 197000, revenue: 3841.50, growth: 12.3 },
    { title: 'Angela', plays: 156000, revenue: 3039.00, growth: -1.2 }
  ],
  geographicPerformance: [
    { region: 'Greater Accra', plays: 567000, percentage: 45.5, revenue: 11340.00 },
    { region: 'Ashanti', plays: 312000, percentage: 25.0, revenue: 6240.00 },
    { region: 'Western', plays: 187000, percentage: 15.0, revenue: 3740.00 },
    { region: 'Central', plays: 124000, percentage: 9.9, revenue: 2480.00 },
    { region: 'Other Regions', plays: 57000, percentage: 4.6, revenue: 1140.00 }
  ],
  revenueBySource: [
    { source: 'Radio Stations', amount: 18750.00, percentage: 80.0 },
    { source: 'Streaming', amount: 3750.00, percentage: 16.0 },
    { source: 'Public Performance', amount: 975.50, percentage: 4.0 }
  ],
  recentActivity: [
    { action: 'Track played on Joy FM', time: '2 minutes ago', plays: 1 },
    { action: 'Album purchased', time: '15 minutes ago', revenue: 12.50 },
    { action: 'Track shared on social media', time: '1 hour ago', plays: 45 },
    { action: 'New follower', time: '2 hours ago', followers: 1 },
    { action: 'Playlist added', time: '3 hours ago', plays: 120 }
  ]
};

const Analytics: React.FC = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('12months');
  const [selectedMetric, setSelectedMetric] = useState('plays');

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toLocaleString();
  };

  const formatCurrency = (amount: number) => {
    return `₵${amount.toLocaleString()}`;
  };

  const getGrowthIcon = (growth: number) => {
    if (growth > 0) return <ArrowUpRight className="w-4 h-4 text-green-500" />;
    if (growth < 0) return <ArrowDownRight className="w-4 h-4 text-red-500" />;
    return <Minus className="w-4 h-4 text-gray-400" />;
  };

  const getGrowthColor = (growth: number) => {
    if (growth > 0) return 'text-green-600 dark:text-green-400';
    if (growth < 0) return 'text-red-600 dark:text-red-400';
    return 'text-gray-600 dark:text-gray-400';
  };

  return (
    <>
      {/* Page header */}
      <div className="border-b border-gray-200 dark:border-slate-700 mb-8">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Analytics Dashboard</h1>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                Comprehensive insights into your music performance, revenue, and audience engagement
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <select
                value={selectedTimeRange}
                onChange={(e) => setSelectedTimeRange(e.target.value)}
                className="px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="7days">Last 7 days</option>
                <option value="30days">Last 30 days</option>
                <option value="3months">Last 3 months</option>
                <option value="12months">Last 12 months</option>
              </select>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-8">
        {/* Overview Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <div className="bg-gradient-to-br from-blue-50/90 via-indigo-50/80 to-purple-50/90 dark:from-slate-900/95 dark:via-slate-800/90 dark:to-slate-900/95 backdrop-blur-sm rounded-xl shadow-lg border border-blue-200/50 dark:border-slate-600/60 p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group cursor-pointer">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm font-normal text-gray-700 dark:text-slate-300 leading-relaxed">Total Plays</p>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-slate-100 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {formatNumber(analyticsData.overview.totalPlays)}
                </p>
                <div className={`flex items-center space-x-1 text-xs ${getGrowthColor(analyticsData.overview.growthRate)}`}>
                  {getGrowthIcon(analyticsData.overview.growthRate)}
                  <span>{Math.abs(analyticsData.overview.growthRate)}% from last period</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/60 dark:to-indigo-900/60 rounded-lg flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                <Play className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50/90 via-green-50/80 to-teal-50/90 dark:from-slate-900/95 dark:via-slate-800/90 dark:to-slate-900/95 backdrop-blur-sm rounded-xl shadow-lg border border-emerald-200/50 dark:border-slate-600/60 p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group cursor-pointer">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm font-normal text-gray-700 dark:text-slate-300 leading-relaxed">Total Revenue</p>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-slate-100 leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                  {formatCurrency(analyticsData.overview.totalRevenue)}
                </p>
                <div className={`flex items-center space-x-1 text-xs ${getGrowthColor(8.3)}`}>
                  {getGrowthIcon(8.3)}
                  <span>8.3% from last period</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/60 dark:to-green-900/60 rounded-lg flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50/90 via-pink-50/80 to-rose-50/90 dark:from-slate-900/95 dark:via-slate-800/90 dark:to-slate-900/95 backdrop-blur-sm rounded-xl shadow-lg border border-purple-200/50 dark:border-slate-600/60 p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group cursor-pointer">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm font-normal text-gray-700 dark:text-slate-300 leading-relaxed">Active Listeners</p>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-slate-100 leading-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {formatNumber(analyticsData.overview.activeListeners)}
                </p>
                <div className={`flex items-center space-x-1 text-xs ${getGrowthColor(5.7)}`}>
                  {getGrowthIcon(5.7)}
                  <span>5.7% from last period</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/60 dark:to-pink-900/60 rounded-lg flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50/90 via-orange-50/80 to-yellow-50/90 dark:from-slate-900/95 dark:via-slate-800/90 dark:to-slate-900/95 backdrop-blur-sm rounded-xl shadow-lg border border-amber-200/50 dark:border-slate-600/60 p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group cursor-pointer">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm font-normal text-gray-700 dark:text-slate-300 leading-relaxed">Total Tracks</p>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-slate-100 leading-tight group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
                  {analyticsData.overview.totalTracks}
                </p>
                <div className={`flex items-center space-x-1 text-xs ${getGrowthColor(2.1)}`}>
                  {getGrowthIcon(2.1)}
                  <span>2.1% from last period</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/60 dark:to-orange-900/60 rounded-lg flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                <Music className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Analytics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Performance Chart */}
          <div className="lg:col-span-2 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-slate-700/30 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                Performance Overview
              </h2>
              <div className="flex items-center space-x-2">
                <button className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors duration-200 ${
                  selectedMetric === 'plays' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800'
                }`} onClick={() => setSelectedMetric('plays')}>
                  Plays
                </button>
                <button className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors duration-200 ${
                  selectedMetric === 'revenue' ? 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800'
                }`} onClick={() => setSelectedMetric('revenue')}>
                  Revenue
                </button>
              </div>
            </div>

            {/* Chart Placeholder */}
            <div className="h-80 flex items-center justify-center bg-gray-50 dark:bg-slate-800/50 rounded-lg border-2 border-dashed border-gray-300 dark:border-slate-600">
              <div className="text-center">
                <BarChart3 className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                <p className="text-gray-500 dark:text-gray-400">
                  {selectedMetric === 'plays' ? 'Monthly Plays Chart' : 'Monthly Revenue Chart'}
                </p>
                <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                  Chart visualization would be displayed here
                </p>
              </div>
            </div>

            {/* Monthly Data Summary */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-gray-50 dark:bg-slate-800/50 rounded-lg">
                <div className="text-sm font-bold text-gray-900 dark:text-white">
                  {formatNumber(analyticsData.monthlyPerformance[analyticsData.monthlyPerformance.length - 1][selectedMetric === 'plays' ? 'plays' : 'revenue'])}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">This Month</div>
              </div>
              <div className="text-center p-3 bg-gray-50 dark:bg-slate-800/50 rounded-lg">
                <div className="text-sm font-bold text-gray-900 dark:text-white">
                  {formatNumber(analyticsData.monthlyPerformance[analyticsData.monthlyPerformance.length - 2][selectedMetric === 'plays' ? 'plays' : 'revenue'])}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Last Month</div>
              </div>
              <div className="text-center p-3 bg-gray-50 dark:bg-slate-800/50 rounded-lg">
                <div className={`text-sm font-bold ${getGrowthColor(12.5)}`}>
                  +12.5%
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Growth</div>
              </div>
            </div>
          </div>

          {/* Top Tracks */}
          <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-slate-700/30 shadow-2xl">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Top Performing Tracks
            </h2>
            <div className="space-y-4">
              {analyticsData.topTracks.map((track, index) => (
                <div key={track.title} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-800/50 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800/70 transition-colors duration-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {track.title}
                      </p>
                      <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                        <span>{formatNumber(track.plays)} plays</span>
                        <span>•</span>
                        <span>{formatCurrency(track.revenue)}</span>
                      </div>
                    </div>
                  </div>
                  <div className={`flex items-center space-x-1 ${getGrowthColor(track.growth)}`}>
                    {getGrowthIcon(track.growth)}
                    <span className="text-xs font-medium">{Math.abs(track.growth)}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Geographic Performance & Revenue Sources */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Geographic Performance */}
          <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-slate-700/30 shadow-2xl">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Geographic Performance
            </h2>
            <div className="space-y-4">
              {analyticsData.geographicPerformance.map((region) => (
                <div key={region.region} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {region.region}
                    </span>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-gray-600 dark:text-gray-400">
                        {formatNumber(region.plays)} plays
                      </span>
                      <span className="font-bold text-green-600 dark:text-green-400">
                        {formatCurrency(region.revenue)}
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
                      style={{ width: `${region.percentage}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 text-right">
                    {region.percentage}% of total plays
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Revenue Sources */}
          <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-slate-700/30 shadow-2xl">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Revenue Sources
            </h2>
            <div className="space-y-4">
              {analyticsData.revenueBySource.map((source) => (
                <div key={source.source} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {source.source}
                    </span>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="font-bold text-green-600 dark:text-green-400">
                        {formatCurrency(source.amount)}
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
                      style={{ width: `${source.percentage}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 text-right">
                    {source.percentage}% of total revenue
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-slate-700/30 shadow-2xl">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Recent Activity
          </h2>
          <div className="space-y-3">
            {analyticsData.recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-800/50 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800/70 transition-colors duration-200">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Activity className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {activity.action}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {activity.time}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  {activity.plays && (
                    <div className="text-sm font-bold text-blue-600 dark:text-blue-400">
                      +{activity.plays} plays
                    </div>
                  )}
                  {activity.revenue && (
                    <div className="text-sm font-bold text-green-600 dark:text-green-400">
                      +{formatCurrency(activity.revenue)}
                    </div>
                  )}
                  {activity.followers && (
                    <div className="text-sm font-bold text-purple-600 dark:text-purple-400">
                      +{activity.followers} follower
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
