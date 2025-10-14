import React, { useEffect, useState } from 'react';
import {
  Play,
  Music,
  TrendingUp,
  MapPin,
  Activity,
  Calendar,
  Settings,
  Bell,
  Search,
  Filter,
  BarChart3,
  PieChart,
  Globe,
  Zap,
  Radio,
  Volume2,
  Eye,
  Star,
  Clock,
  Target,
  DollarSign,
  Download,
  Share2,
  Mic,
  Award,
  Smartphone,
  TrendingDown,
  Users,
  Headphones,
  ChevronUp,
  ChevronDown
} from 'lucide-react';

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedRegion, setSelectedRegion] = useState('all');

  // Sample data for demonstration
  const statsData = {
    totalPlays: 45782,
    totalStations: 127,
    totalEarnings: 2847.5,
    growthRate: 23.5,
    activeTracks: 15,
    avgConfidence: 94.2
  };

  const topSongs = [
    {
      id: 1,
      title: 'Midnight Vibes',
      plays: 8745,
      earnings: 524.7,
      confidence: 98,
      stations: 45,
      trend: 'up'
    },
    {
      id: 2,
      title: 'Ghana My Home',
      plays: 7234,
      earnings: 434.04,
      confidence: 96,
      stations: 38,
      trend: 'up'
    },
    {
      id: 3,
      title: 'Love Letter',
      plays: 6543,
      earnings: 392.58,
      confidence: 94,
      stations: 32,
      trend: 'stable'
    },
    {
      id: 4,
      title: 'Hustle Hard',
      plays: 5432,
      earnings: 325.92,
      confidence: 92,
      stations: 28,
      trend: 'up'
    },
    {
      id: 5,
      title: 'Dance Floor',
      plays: 4321,
      earnings: 259.26,
      confidence: 89,
      stations: 24,
      trend: 'down'
    }
  ];

  const playsOverTime = [
    { date: 'Jan', airplay: 3200, earnings: 192.0 },
    { date: 'Feb', airplay: 4100, earnings: 246.0 },
    { date: 'Mar', airplay: 3800, earnings: 228.0 },
    { date: 'Apr', airplay: 5200, earnings: 312.0 },
    { date: 'May', airplay: 6100, earnings: 366.0 },
    { date: 'Jun', airplay: 7500, earnings: 450.0 },
    { date: 'Jul', airplay: 8900, earnings: 534.0 },
    { date: 'Aug', airplay: 9200, earnings: 552.0 },
    { date: 'Sep', airplay: 10800, earnings: 648.0 },
    { date: 'Oct', airplay: 12500, earnings: 750.0 },
    { date: 'Nov', airplay: 14200, earnings: 852.0 },
    { date: 'Dec', airplay: 15800, earnings: 948.0 }
  ];

  const stationBreakdown = [
    {
      station: 'Peace FM',
      plays: 1245,
      percentage: 28.5,
      region: 'Greater Accra',
      type: 'National'
    },
    {
      station: 'Hitz FM',
      plays: 987,
      percentage: 22.6,
      region: 'Greater Accra',
      type: 'Urban'
    },
    {
      station: 'Adom FM',
      plays: 743,
      percentage: 17.0,
      region: 'Ashanti',
      type: 'Regional'
    },
    {
      station: 'Joy FM',
      plays: 654,
      percentage: 15.0,
      region: 'Greater Accra',
      type: 'National'
    },
    {
      station: 'Okay FM',
      plays: 543,
      percentage: 12.4,
      region: 'Greater Accra',
      type: 'Urban'
    },
    {
      station: 'Others',
      plays: 198,
      percentage: 4.5,
      region: 'Various',
      type: 'Various'
    }
  ];

  const ghanaRegions = [
    {
      region: 'Greater Accra',
      plays: 15234,
      earnings: 913.04,
      stations: 45,
      growth: 15.2,
      trend: 'up'
    },
    {
      region: 'Ashanti',
      plays: 12543,
      earnings: 752.58,
      stations: 32,
      growth: 12.8,
      trend: 'up'
    },
    {
      region: 'Northern',
      plays: 8765,
      earnings: 525.9,
      stations: 18,
      growth: 18.5,
      trend: 'up'
    },
    {
      region: 'Western',
      plays: 6543,
      earnings: 392.58,
      stations: 15,
      growth: 8.9,
      trend: 'stable'
    },
    {
      region: 'Eastern',
      plays: 4321,
      earnings: 259.26,
      stations: 12,
      growth: 11.3,
      trend: 'up'
    },
    {
      region: 'Central',
      plays: 3456,
      earnings: 207.36,
      stations: 8,
      growth: 7.2,
      trend: 'stable'
    }
  ];

  const performanceScore = {
    overall: 8.7,
    airplayGrowth: 9.2,
    regionalReach: 8.5,
    fanEngagement: 8.8,
    trackQuality: 9.0
  };

  const maxPlays = Math.max(...playsOverTime.map((d) => d.airplay));
  const maxRegionalPlays = Math.max(...ghanaRegions.map((r) => r.plays));

  const getRegionColors = (index: number) => {
    const colors = [
      'from-blue-500 to-purple-500',
      'from-green-500 to-blue-500',
      'from-yellow-500 to-green-500',
      'from-orange-500 to-yellow-500',
      'from-red-500 to-orange-500',
      'from-purple-500 to-pink-500',
    ];
    return colors[index % colors.length];
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <ChevronUp className="w-4 h-4 text-green-500" />;
      case 'down':
        return <ChevronDown className="w-4 h-4 text-red-500" />;
      default:
        return <TrendingDown className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <>
      {/* Page header */}
      <div className="border-b border-gray-200 dark:border-slate-700 mb-8">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Welcome back! Here's your music performance overview.
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div>
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Airplay</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {statsData.totalPlays.toLocaleString()}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                <Radio className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-green-600 dark:text-green-400">+{statsData.growthRate}%</span>
              <span className="text-gray-500 dark:text-gray-400 ml-2">from last month</span>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Earnings</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  ₵{statsData.totalEarnings.toLocaleString()}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-green-600 dark:text-green-400">+18.2%</span>
              <span className="text-gray-500 dark:text-gray-400 ml-2">from last month</span>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Stations</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {statsData.totalStations}
                </p>
              </div>
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/50 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">Across Ghana</p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Avg. Confidence</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {statsData.avgConfidence}%
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">Track recognition rate</p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Charts and Data */}
          <div className="lg:col-span-2 space-y-6">
            {/* Plays Over Time Chart */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-blue-500" />
                  Airplay Trends
                </h2>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Plays</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Earnings</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {playsOverTime.map((month, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-16 text-sm text-gray-600 dark:text-gray-400">
                      {month.date}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                          <div
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: `${(month.airplay / maxPlays) * 100}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400 w-16">
                          {month.airplay.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <div className="w-20 text-sm text-green-600 dark:text-green-400 text-right">
                      ₵{month.earnings.toFixed(0)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Songs */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                  <Music className="w-5 h-5 mr-2 text-purple-500" />
                  Top Performing Tracks
                </h2>
                <button className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center">
                  View All <Eye className="w-4 h-4 ml-1" />
                </button>
              </div>
              <div className="space-y-4">
                {topSongs.map((song, index) => (
                  <div key={song.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">
                          {song.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {song.stations} stations • {song.confidence}% accuracy
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {song.plays.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">plays</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-600 dark:text-green-400">
                          ₵{song.earnings.toFixed(2)}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">earned</p>
                      </div>
                      <div className="flex items-center">
                        {getTrendIcon(song.trend)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Regional Performance */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-green-500" />
                  Regional Performance
                </h2>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="all">All Regions</option>
                  {ghanaRegions.map((region) => (
                    <option key={region.region} value={region.region}>
                      {region.region}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ghanaRegions.map((region, index) => (
                  <div key={region.region} className="p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {region.region}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className={`text-sm font-medium ${
                          region.trend === 'up' ? 'text-green-600 dark:text-green-400' :
                          region.trend === 'down' ? 'text-red-600 dark:text-red-400' :
                          'text-gray-600 dark:text-gray-400'
                        }`}>
                          {region.trend === 'up' ? '+' : region.trend === 'down' ? '-' : ''}
                          {region.growth}%
                        </span>
                        {getTrendIcon(region.trend)}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Plays</span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {region.plays.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Earnings</span>
                        <span className="font-medium text-green-600 dark:text-green-400">
                          ₵{region.earnings.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Stations</span>
                        <span className="font-medium text-orange-600 dark:text-orange-400">
                          {region.stations}
                        </span>
                      </div>
                    </div>
                    <div className="mt-3 w-full bg-gray-200 dark:bg-slate-600 rounded-full h-2">
                      <div
                        className={`h-full bg-gradient-to-r ${getRegionColors(index)} rounded-full`}
                        style={{ width: `${(region.plays / maxRegionalPlays) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar widgets */}
          <div className="space-y-6">
            {/* Station Breakdown */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                  <PieChart className="w-5 h-5 mr-2 text-yellow-500" />
                  Top Stations
                </h2>
              </div>
              <div className="space-y-4">
                {stationBreakdown.map((station, index) => (
                  <div key={station.station} className="flex items-center space-x-3">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {station.station}
                        </span>
                        <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">
                          {station.percentage}%
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                        {station.region} • {station.type}
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full"
                          style={{ width: `${station.percentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Score */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                  <Award className="w-5 h-5 mr-2 text-purple-500" />
                  Performance Score
                </h2>
              </div>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                  {performanceScore.overall}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Out of 10</div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Airplay Growth</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 bg-gray-200 dark:bg-slate-600 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: `${performanceScore.airplayGrowth * 10}%` }} />
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {performanceScore.airplayGrowth}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Regional Reach</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 bg-gray-200 dark:bg-slate-600 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${performanceScore.regionalReach * 10}%` }} />
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {performanceScore.regionalReach}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Track Quality</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 bg-gray-200 dark:bg-slate-600 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${performanceScore.trackQuality * 10}%` }} />
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {performanceScore.trackQuality}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Quick Actions
              </h2>
              <div className="space-y-3">
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center">
                  <Download className="w-4 h-4 mr-2" />
                  Download Report
                </button>
                <button className="w-full bg-white dark:bg-slate-700 hover:bg-gray-50 dark:hover:bg-slate-600 text-gray-900 dark:text-white py-3 px-4 rounded-lg font-medium border border-gray-300 dark:border-slate-600 transition-colors flex items-center justify-center">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Stats
                </button>
                <button className="w-full bg-white dark:bg-slate-700 hover:bg-gray-50 dark:hover:bg-slate-600 text-gray-900 dark:text-white py-3 px-4 rounded-lg font-medium border border-gray-300 dark:border-slate-600 transition-colors flex items-center justify-center">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Mobile Analytics
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;