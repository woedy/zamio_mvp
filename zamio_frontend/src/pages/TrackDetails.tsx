import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Play,
  Pause,
  Volume2,
  Download,
  Share2,
  Heart,
  Clock,
  Calendar,
  BarChart3,
  MapPin,
  Users,
  Music,
  ArrowLeft,
  Plus,
  Eye,
  Trash2,
  RefreshCw,
  TrendingUp,
  Globe,
  FileText,
  DollarSign,
  Award,
  Target
} from 'lucide-react';

// Mock track data - enhanced with more realistic structure matching reference
const mockTrackData = {
  id: '1',
  title: 'Ghana Na Woti',
  artist_name: 'King Promise',
  album: '5 Star',
  genre_name: 'Afrobeats',
  duration: '3:45',
  release_date: '2023-06-15',
  plays: 1247,
  cover_art: '/covers/ghana-na-woti.jpg',
  audio_file_mp3: '/audio/ghana-na-woti.mp3',
  // Revenue data
  totalEarnings: 2347.50,
  monthlyEarnings: [
    { month: 'Jun 2024', amount: 450.00, currency: 'GHS' },
    { month: 'Jul 2024', amount: 523.00, currency: 'GHS' },
    { month: 'Aug 2024', amount: 612.00, currency: 'GHS' },
    { month: 'Sep 2024', amount: 387.00, currency: 'GHS' },
    { month: 'Oct 2024', amount: 375.50, currency: 'GHS' }
  ],
  territoryEarnings: [
    { territory: 'Ghana', amount: 1876.00, currency: 'GHS', percentage: 80 },
    { territory: 'Nigeria', amount: 234.50, currency: 'GHS', percentage: 10 },
    { territory: 'UK', amount: 140.70, currency: 'GHS', percentage: 6 },
    { territory: 'USA', amount: 93.80, currency: 'GHS', percentage: 4 }
  ],
  payoutHistory: [
    { date: '2024-09-15', amount: 450.00, status: 'Paid', period: 'Jun 2024' },
    { date: '2024-10-15', amount: 523.00, status: 'Paid', period: 'Jul 2024' },
    { date: '2024-11-15', amount: 612.00, status: 'Pending', period: 'Aug 2024' }
  ],
  contributors: [
    { role: 'Producer', name: 'KillBeatz', percentage: 25 },
    { role: 'Featured Artist', name: 'Shatta Wale', percentage: 15 },
    { role: 'Mixing Engineer', name: 'MikeMillzOnEm', percentage: 10 }
  ],
  topStations: [
    { name: "Joy FM", count: 156, region: 'Greater Accra' },
    { name: "Peace FM", count: 134, region: 'Greater Accra' },
    { name: "Adom FM", count: 98, region: 'Ashanti' },
    { name: "Hitz FM", count: 87, region: 'Greater Accra' },
    { name: "Okay FM", count: 76, region: 'Greater Accra' }
  ],
  playLogs: [
    { time: '2024-10-16T10:30:00Z', station: 'Peace FM', region: 'Greater Accra' },
    { time: '2024-10-16T14:22:00Z', station: 'Joy FM', region: 'Greater Accra' },
    { time: '2024-10-16T16:45:00Z', station: 'Adom FM', region: 'Ashanti' },
    { time: '2024-10-16T19:15:00Z', station: 'Hitz FM', region: 'Greater Accra' },
    { time: '2024-10-16T21:30:00Z', station: 'Okay FM', region: 'Greater Accra' }
  ],
  playsOverTime: [
    { month: 'Jun', plays: 245 },
    { month: 'Jul', plays: 389 },
    { month: 'Aug', plays: 567 },
    { month: 'Sep', plays: 723 },
    { month: 'Oct', plays: 1247 }
  ],
  radioStations: [
    { name: "Joy FM", latitude: 5.5600, longitude: -0.2100 },
    { name: "Peace FM", latitude: 5.5900, longitude: -0.2400 },
    { name: "Adom FM", latitude: 6.6885, longitude: -1.6244 },
    { name: "Hitz FM", latitude: 5.5800, longitude: -0.2200 },
    { name: "Okay FM", latitude: 5.5700, longitude: -0.2300 }
  ]
};

const TrackDetails: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { trackId } = location.state || {};

  // Audio Player
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newContributor, setNewContributor] = useState({ name: '', role: '', percentage: 0 });

  // Get track data - for demo, we'll use the first track or find by ID
  const track = trackId ? mockTrackData : mockTrackData;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const setAudioData = () => {
      setDuration(audio.duration);
    };

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener('loadedmetadata', setAudioData);
    audio.addEventListener('timeupdate', updateTime);

    return () => {
      audio.removeEventListener('loadedmetadata', setAudioData);
      audio.removeEventListener('timeupdate', updateTime);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleAddContributor = () => {
    if (newContributor.name.trim() && newContributor.role.trim()) {
      // Calculate current total percentage from existing contributors
      const currentTotal = track.contributors.reduce((sum, contributor) => sum + (contributor.percentage || 0), 0);
      const newTotal = currentTotal + newContributor.percentage;

      // Validate that new total doesn't exceed 100%
      if (newTotal > 100) {
        alert(`Total percentage would exceed 100%. Current total: ${currentTotal}%, adding ${newContributor.percentage}% would make ${newTotal}%`);
        return;
      }

      // In a real app, this would make an API call
      // For demo, we'll just show an alert
      alert(`Added contributor: ${newContributor.name} as ${newContributor.role} with ${newContributor.percentage}% split`);
      setNewContributor({ name: '', role: '', percentage: 0 });
      setIsModalOpen(false);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setNewContributor({ name: '', role: '', percentage: 0 });
  };

  // Calculate current total percentage
  const currentTotalPercentage = track.contributors.reduce((sum, contributor) => sum + (contributor.percentage || 0), 0);
  const remainingPercentage = 100 - currentTotalPercentage;

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    const audio = audioRef.current;
    if (audio) {
      audio.volume = vol;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, '0');
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <>
      {/* Back Navigation */}
      <div className="mb-6">
        <button
          onClick={() => navigate('/dashboard/all-artist-songs')}
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Upload Management</span>
        </button>
      </div>

      {/* Page header */}
      <div className="border-b border-gray-200 dark:border-slate-700 mb-8">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Track Details</h1>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                Detailed view of track performance, metadata, and play history
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-8">
        {/* Track Header with Audio Player */}
        <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 dark:border-slate-700/30 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            {/* Track Info */}
            <div className="flex items-start gap-6 flex-1">
              <div className="w-32 h-32 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-xl flex items-center justify-center">
                <Music className="w-16 h-16 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="flex-1">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {track.title}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-1">
                  {track.artist_name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  from album "{track.album}"
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{track.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(track.release_date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BarChart3 className="w-4 h-4" />
                    <span>{track.plays.toLocaleString()} plays</span>
                  </div>
                </div>

                <div className="mt-4">
                  <span className="inline-flex px-3 py-1 text-sm font-semibold rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400">
                    {track.genre_name}
                  </span>
                </div>
              </div>
            </div>

            {/* Audio Player */}
            <div className="w-full lg:w-80 bg-gradient-to-br from-indigo-50/90 via-purple-50/80 to-pink-50/90 dark:from-slate-900/95 dark:via-slate-800/90 dark:to-slate-900/95 backdrop-blur-sm rounded-xl shadow-lg border border-indigo-200/50 dark:border-slate-600/60 p-6">
              <audio ref={audioRef} src={track.audio_file_mp3} preload="metadata" />

              {/* Song Title */}
              <h3 className="text-lg font-semibold text-center text-gray-900 dark:text-white mb-4">
                Now Playing
              </h3>

              {/* Play/Pause Button */}
              <div className="flex justify-center mb-4">
                <button
                  onClick={togglePlay}
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg flex items-center justify-center text-white text-xl transition-all duration-200 hover:scale-105"
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6" />
                  ) : (
                    <Play className="w-6 h-6 ml-1" />
                  )}
                </button>
              </div>

              {/* Time and Slider */}
              <div className="space-y-3">
                <input
                  type="range"
                  min="0"
                  max={duration}
                  value={currentTime}
                  onChange={handleRangeChange}
                  className="w-full h-2 bg-gray-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #4f46e5 0%, #4f46e5 ${(currentTime / duration) * 100}%, #e5e7eb ${(currentTime / duration) * 100}%, #e5e7eb 100%)`
                  }}
                />
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 font-mono">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Volume Control */}
              <div className="flex items-center space-x-3 mt-4">
                <Volume2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="flex-1 h-1 bg-gray-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-emerald-50/90 via-green-50/80 to-teal-50/90 dark:from-slate-900/95 dark:via-slate-800/90 dark:to-slate-900/95 backdrop-blur-sm rounded-xl shadow-lg border border-emerald-200/50 dark:border-slate-600/60 p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-normal text-gray-700 dark:text-slate-300">Total Plays</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-slate-100">{track.plays.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/60 dark:to-green-900/60 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50/90 via-cyan-50/80 to-indigo-50/90 dark:from-slate-900/95 dark:via-slate-800/90 dark:to-slate-900/95 backdrop-blur-sm rounded-xl shadow-lg border border-blue-200/50 dark:border-slate-600/60 p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-normal text-gray-700 dark:text-slate-300">Top Stations</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-slate-100">{track.topStations.length}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/60 dark:to-cyan-900/60 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50/90 via-pink-50/80 to-rose-50/90 dark:from-slate-900/95 dark:via-slate-800/90 dark:to-slate-900/95 backdrop-blur-sm rounded-xl shadow-lg border border-purple-200/50 dark:border-slate-600/60 p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-normal text-gray-700 dark:text-slate-300">Contributors</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-slate-100">{track.contributors.length}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/60 dark:to-pink-900/60 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50/90 via-orange-50/80 to-yellow-50/90 dark:from-slate-900/95 dark:via-slate-800/90 dark:to-slate-900/95 backdrop-blur-sm rounded-xl shadow-lg border border-amber-200/50 dark:border-slate-600/60 p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-normal text-gray-700 dark:text-slate-300">Duration</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-slate-100">{track.duration}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/60 dark:to-orange-900/60 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Contributors and Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contributors */}
          <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-slate-700/30 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                <Users className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
                Contributors
              </h2>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Total: <span className="font-semibold text-purple-600 dark:text-purple-400">{currentTotalPercentage}%</span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-500">
                    Remaining: <span className={`font-medium ${remainingPercentage < 0 ? 'text-red-500' : 'text-green-500'}`}>
                      {remainingPercentage}%
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-md hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
                >
                  <Plus className="w-4 h-4" />
                  <span className="text-sm">Add</span>
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {track.contributors.map((contributor, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-800 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{contributor.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{contributor.role}</p>
                  </div>
                  <div className="text-right">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full flex items-center justify-center mb-1">
                      <Users className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    <p className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                      {contributor.percentage}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Plays Chart - Enhanced */}
          <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-slate-700/30 shadow-2xl">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
              <BarChart3 className="w-5 h-5 mr-2 text-emerald-600 dark:text-emerald-400" />
              Plays Over Time
            </h2>

            {/* Enhanced Chart with Growth Indicators */}
            <div className="space-y-4">
              {track.playsOverTime.map((data, index) => {
                const maxPlays = Math.max(...track.playsOverTime.map(d => d.plays));
                const percentage = (data.plays / maxPlays) * 100;
                const prevPlays = index > 0 ? track.playsOverTime[index - 1].plays : 0;
                const growth = index > 0 ? ((data.plays - prevPlays) / prevPlays) * 100 : 0;

                return (
                  <div key={index} className="group relative">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-16 text-sm text-gray-600 dark:text-gray-400 font-medium">
                          {data.month}
                        </div>
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                          growth > 0
                            ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400'
                            : growth < 0
                            ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                            : 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
                        }`}>
                          {growth > 0 ? '+' : ''}{growth.toFixed(1)}%
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-gray-900 dark:text-white">
                          {data.plays.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          plays
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-gray-200 dark:bg-slate-700 rounded-full h-3 relative overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-green-500 h-full rounded-full transition-all duration-500 ease-out relative"
                            style={{
                              width: `${percentage}%`,
                              boxShadow: '0 0 10px rgba(16, 185, 129, 0.3)'
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                          </div>
                        </div>
                        <div className="w-12 text-xs text-gray-500 dark:text-gray-400 text-right font-mono">
                          {percentage.toFixed(0)}%
                        </div>
                      </div>

                      {/* Animated glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-green-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>

                    {/* Tooltip on hover */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                      {data.month}: {data.plays.toLocaleString()} plays
                      {growth !== 0 && (
                        <span className={`ml-1 ${growth > 0 ? 'text-green-400' : 'text-red-400'}`}>
                          ({growth > 0 ? '+' : ''}{growth.toFixed(1)}%)
                        </span>
                      )}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Performance Summary Stats */}
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-slate-700">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                    {Math.max(...track.playsOverTime.map(d => d.plays)).toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Peak Plays</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    {track.playsOverTime.length}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Months Data</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                    +{((track.playsOverTime[track.playsOverTime.length - 1]?.plays - track.playsOverTime[0]?.plays) / track.playsOverTime[0]?.plays * 100).toFixed(1)}%
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Total Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Stations */}
        <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-slate-700/30 shadow-2xl">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
            Top Stations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {track.topStations.map((station, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-800 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{station.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{station.region}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-emerald-600 dark:text-emerald-400">{station.count}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">plays</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Play Logs */}
        <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-slate-700/30 shadow-2xl">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <Clock className="w-5 h-5 mr-2 text-amber-600 dark:text-amber-400" />
            Recent Play Logs
          </h2>

          <div className="space-y-3">
            {track.playLogs.map((log, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-800 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-200">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{log.station}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{log.region}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900 dark:text-white">
                    {new Date(log.time).toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Played</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Dashboard */}
        <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-slate-700/30 shadow-2xl">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <DollarSign className="w-5 h-5 mr-2 text-green-600 dark:text-green-400" />
            Revenue Dashboard
          </h2>

          {/* Revenue Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-gradient-to-br from-green-50/90 via-emerald-50/80 to-teal-50/90 dark:from-slate-900/95 dark:via-slate-800/90 dark:to-slate-900/95 backdrop-blur-sm rounded-xl shadow-lg border border-green-200/50 dark:border-slate-600/60 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-normal text-gray-700 dark:text-slate-300">Total Earnings</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-slate-100">₵{track.totalEarnings.toLocaleString()}</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/60 dark:to-emerald-900/60 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50/90 via-cyan-50/80 to-indigo-50/90 dark:from-slate-900/95 dark:via-slate-800/90 dark:to-slate-900/95 backdrop-blur-sm rounded-xl shadow-lg border border-blue-200/50 dark:border-slate-600/60 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-normal text-gray-700 dark:text-slate-300">This Month</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-slate-100">₵{track.monthlyEarnings[track.monthlyEarnings.length - 1]?.amount.toLocaleString() || '0'}</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/60 dark:to-cyan-900/60 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50/90 via-pink-50/80 to-rose-50/90 dark:from-slate-900/95 dark:via-slate-800/90 dark:to-slate-900/95 backdrop-blur-sm rounded-xl shadow-lg border border-purple-200/50 dark:border-slate-600/60 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-normal text-gray-700 dark:text-slate-300">Pending Payout</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-slate-100">₵{track.payoutHistory.find(p => p.status === 'Pending')?.amount.toLocaleString() || '0'}</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/60 dark:to-pink-900/60 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Monthly Earnings Chart - Enhanced */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-slate-700/30 shadow-2xl">
              <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <TrendingUp className="w-4 h-4 mr-2 text-green-600 dark:text-green-400" />
                Monthly Earnings Trend
              </h3>

              {/* Enhanced Chart with Better Visualization */}
              <div className="space-y-4">
                {track.monthlyEarnings.map((earning, index) => {
                  const maxAmount = Math.max(...track.monthlyEarnings.map(e => e.amount));
                  const percentage = (earning.amount / maxAmount) * 100;
                  const prevAmount = index > 0 ? track.monthlyEarnings[index - 1].amount : 0;
                  const growth = index > 0 ? ((earning.amount - prevAmount) / prevAmount) * 100 : 0;

                  return (
                    <div key={index} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-16 text-sm text-gray-600 dark:text-gray-400 font-medium">
                            {earning.month}
                          </div>
                          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                            growth > 0
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                              : growth < 0
                              ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                              : 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
                          }`}>
                            {growth > 0 ? '+' : ''}{growth.toFixed(1)}%
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold text-gray-900 dark:text-white">
                            ₵{earning.amount.toLocaleString()}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {earning.currency}
                          </div>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="flex items-center space-x-2">
                          <div className="flex-1 bg-gray-200 dark:bg-slate-700 rounded-full h-3 relative overflow-hidden">
                            <div
                              className="bg-gradient-to-r from-green-400 via-green-500 to-emerald-500 h-full rounded-full transition-all duration-500 ease-out relative"
                              style={{
                                width: `${percentage}%`,
                                boxShadow: '0 0 10px rgba(34, 197, 94, 0.3)'
                              }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                            </div>
                          </div>
                          <div className="w-12 text-xs text-gray-500 dark:text-gray-400 text-right">
                            {percentage.toFixed(0)}%
                          </div>
                        </div>

                        {/* Animated glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Summary Stats */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-slate-700">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-green-600 dark:text-green-400">
                      ₵{Math.max(...track.monthlyEarnings.map(e => e.amount)).toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Peak Month</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                      {track.monthlyEarnings.length}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Months Tracked</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                      +{((track.monthlyEarnings[track.monthlyEarnings.length - 1]?.amount - track.monthlyEarnings[0]?.amount) / track.monthlyEarnings[0]?.amount * 100).toFixed(1)}%
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Growth</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Territory Earnings - Enhanced */}
            <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-slate-700/30 shadow-2xl">
              <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Globe className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                Earnings by Territory
              </h3>

              <div className="space-y-4">
                {track.territoryEarnings.map((territory, index) => {
                  const maxTerritoryAmount = Math.max(...track.territoryEarnings.map(t => t.amount));
                  const percentage = (territory.amount / maxTerritoryAmount) * 100;

                  return (
                    <div key={index} className="group relative">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${
                            index === 0 ? 'bg-green-500' :
                            index === 1 ? 'bg-blue-500' :
                            index === 2 ? 'bg-purple-500' : 'bg-amber-500'
                          }`}></div>
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">{territory.territory}</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">{territory.percentage}% of total earnings</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-green-600 dark:text-green-400">₵{territory.amount.toLocaleString()}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{territory.currency}</p>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="flex items-center space-x-2">
                          <div className="flex-1 bg-gray-200 dark:bg-slate-700 rounded-full h-3 relative overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all duration-500 ease-out ${
                                index === 0 ? 'bg-gradient-to-r from-green-400 to-green-600' :
                                index === 1 ? 'bg-gradient-to-r from-blue-400 to-blue-600' :
                                index === 2 ? 'bg-gradient-to-r from-purple-400 to-purple-600' :
                                'bg-gradient-to-r from-amber-400 to-amber-600'
                              }`}
                              style={{
                                width: `${percentage}%`,
                                boxShadow: `0 0 8px ${index === 0 ? 'rgba(34, 197, 94, 0.4)' : index === 1 ? 'rgba(59, 130, 246, 0.4)' : index === 2 ? 'rgba(147, 51, 234, 0.4)' : 'rgba(245, 158, 11, 0.4)'}`
                              }}
                            ></div>
                          </div>
                          <div className="w-12 text-xs text-gray-500 dark:text-gray-400 text-right font-mono">
                            {percentage.toFixed(0)}%
                          </div>
                        </div>

                        {/* Hover tooltip */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                          {territory.territory}: ₵{territory.amount.toLocaleString()} ({territory.percentage}%)
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Territory Summary */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-slate-700">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Total Territories:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{track.territoryEarnings.length}</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-1">
                  <span className="text-gray-600 dark:text-gray-400">Primary Market:</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">
                    {track.territoryEarnings[0]?.territory} ({track.territoryEarnings[0]?.percentage}%)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Payout History */}
          <div className="mt-6">
            <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-4">Payout History</h3>
            <div className="space-y-2">
              {track.payoutHistory.map((payout, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-800 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${payout.status === 'Paid' ? 'bg-green-500' : 'bg-amber-500'}`} />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{payout.period}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{new Date(payout.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900 dark:text-white">₵{payout.amount.toLocaleString()}</p>
                    <p className={`text-sm ${payout.status === 'Paid' ? 'text-green-600 dark:text-green-400' : 'text-amber-600 dark:text-amber-400'}`}>
                      {payout.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Geographic Visualization */}
        <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-slate-700/30 shadow-2xl">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
            Geographic Performance
          </h2>

          {/* Interactive Map Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Ghana Map Visualization */}
            <div className="relative">
              <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-4">Regional Play Distribution</h3>

              {/* Custom Ghana Map SVG */}
              <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                <svg viewBox="0 0 400 300" className="w-full h-64">
                  {/* Ghana Outline */}
                  <path
                    d="M50 150 Q100 100 200 120 Q300 140 350 180 Q320 220 250 240 Q150 250 80 220 Q50 180 50 150 Z"
                    fill="rgba(59, 130, 246, 0.1)"
                    stroke="rgba(59, 130, 246, 0.3)"
                    strokeWidth="2"
                  />

                  {/* Regional Play Density Indicators */}
                  {/* Greater Accra - High density */}
                  <circle cx="120" cy="160" r="25" fill="rgba(34, 197, 94, 0.8)" className="animate-pulse">
                    <animate attributeName="r" values="25;30;25" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <text x="120" y="165" textAnchor="middle" className="text-xs font-bold fill-white">Accra</text>
                  <text x="120" y="180" textAnchor="middle" className="text-xs fill-gray-700 dark:fill-gray-300">423 plays</text>

                  {/* Ashanti - Medium density */}
                  <circle cx="180" cy="180" r="18" fill="rgba(59, 130, 246, 0.7)">
                    <animate attributeName="r" values="18;22;18" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                  <text x="180" y="185" textAnchor="middle" className="text-xs font-bold fill-white">Kumasi</text>
                  <text x="180" y="200" textAnchor="middle" className="text-xs fill-gray-700 dark:fill-gray-300">156 plays</text>

                  {/* Northern - Lower density */}
                  <circle cx="220" cy="120" r="12" fill="rgba(147, 51, 234, 0.6)">
                    <animate attributeName="r" values="12;15;12" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <text x="220" y="125" textAnchor="middle" className="text-xs font-bold fill-white">Tamale</text>
                  <text x="220" y="140" textAnchor="middle" className="text-xs fill-gray-700 dark:fill-gray-300">34 plays</text>

                  {/* Western - Medium density */}
                  <circle cx="80" cy="200" r="15" fill="rgba(245, 158, 11, 0.7)">
                    <animate attributeName="r" values="15;18;15" dur="2.2s" repeatCount="indefinite" />
                  </circle>
                  <text x="80" y="205" textAnchor="middle" className="text-xs font-bold fill-white">Takoradi</text>
                  <text x="80" y="220" textAnchor="middle" className="text-xs fill-gray-700 dark:fill-gray-300">67 plays</text>

                  {/* Station markers */}
                  <g className="station-markers">
                    {/* Major stations with pulsing effects */}
                    <circle cx="110" cy="155" r="3" fill="#ef4444" className="animate-pulse" />
                    <circle cx="130" cy="165" r="3" fill="#3b82f6" className="animate-pulse" />
                    <circle cx="170" cy="175" r="3" fill="#10b981" className="animate-pulse" />
                    <circle cx="190" cy="185" r="3" fill="#f59e0b" className="animate-pulse" />
                  </g>
                </svg>

                {/* Legend */}
                <div className="absolute bottom-2 left-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg p-2 text-xs">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">High (100+)</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">Medium (50-99)</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">Low (1-49)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Regional Analytics Cards */}
            <div className="space-y-4">
              <h3 className="text-md font-semibold text-gray-900 dark:text-white">Regional Performance</h3>

              {[
                { region: 'Greater Accra', plays: 423, percentage: 68, color: 'green', stations: 12 },
                { region: 'Ashanti', plays: 156, percentage: 25, color: 'blue', stations: 8 },
                { region: 'Northern', plays: 34, percentage: 5, color: 'purple', stations: 3 },
                { region: 'Western', plays: 67, percentage: 11, color: 'amber', stations: 4 }
              ].map((region, index) => (
                <div key={index} className="group relative p-4 bg-gray-50 dark:bg-slate-800 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full bg-${region.color}-500`}></div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{region.region}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{region.stations} active stations</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900 dark:text-white">{region.plays}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">plays</p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-200 dark:bg-slate-700 rounded-full h-2 relative overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            region.color === 'green' ? 'bg-gradient-to-r from-green-400 to-green-600' :
                            region.color === 'blue' ? 'bg-gradient-to-r from-blue-400 to-blue-600' :
                            region.color === 'purple' ? 'bg-gradient-to-r from-purple-400 to-purple-600' :
                            'bg-gradient-to-r from-amber-400 to-amber-600'
                          }`}
                          style={{
                            width: `${region.percentage}%`,
                            boxShadow: `0 0 8px ${region.color === 'green' ? 'rgba(34, 197, 94, 0.4)' : region.color === 'blue' ? 'rgba(59, 130, 246, 0.4)' : region.color === 'purple' ? 'rgba(147, 51, 234, 0.4)' : 'rgba(245, 158, 11, 0.4)'}`
                          }}
                        ></div>
                      </div>
                      <div className="w-12 text-xs text-gray-500 dark:text-gray-400 text-right font-mono">
                        {region.percentage}%
                      </div>
                    </div>

                    {/* Hover tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                      {region.region}: {region.plays} plays ({region.percentage}%)
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Geographic Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200 dark:border-slate-700">
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">16</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Regions Covered</div>
            </div>

            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">68%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Primary Market Share</div>
            </div>

            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">25</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Active Stations</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        .slider::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }
      `}</style>

      {/* Add Contributor Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Add Contributor</h2>
              <button
                onClick={handleModalClose}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Contributor Name
                </label>
                <input
                  type="text"
                  value={newContributor.name}
                  onChange={(e) => setNewContributor({ ...newContributor, name: e.target.value })}
                  placeholder="Enter contributor name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Role
                </label>
                <select
                  value={newContributor.role}
                  onChange={(e) => setNewContributor({ ...newContributor, role: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select a role</option>
                  <option value="Producer">Producer</option>
                  <option value="Featured Artist">Featured Artist</option>
                  <option value="Mixing Engineer">Mixing Engineer</option>
                  <option value="Mastering Engineer">Mastering Engineer</option>
                  <option value="Songwriter">Songwriter</option>
                  <option value="Vocalist">Vocalist</option>
                  <option value="Instrumentalist">Instrumentalist</option>
                  <option value="Arranger">Arranger</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Percentage Split (%)
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={newContributor.percentage}
                  onChange={(e) => setNewContributor({ ...newContributor, percentage: parseInt(e.target.value) || 0 })}
                  placeholder="Enter percentage (0-100)"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Current total: {currentTotalPercentage}% | Remaining: {remainingPercentage}%
                </div>
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  onClick={handleModalClose}
                  className="flex-1 px-4 py-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-slate-600 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddContributor}
                  disabled={!newContributor.name.trim() || !newContributor.role.trim() || newContributor.percentage <= 0 || (currentTotalPercentage + newContributor.percentage) > 100}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  Add Contributor
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TrackDetails;
