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
  RefreshCw
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

          {/* Plays Chart */}
          <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-slate-700/30 shadow-2xl">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
              <BarChart3 className="w-5 h-5 mr-2 text-emerald-600 dark:text-emerald-400" />
              Plays Over Time
            </h2>

            <div className="space-y-4">
              {track.playsOverTime.map((data, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-16 text-sm text-gray-600 dark:text-gray-400">
                    {data.month}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-emerald-500 to-green-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(data.plays / Math.max(...track.playsOverTime.map(d => d.plays))) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400 w-16">
                        {data.plays}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
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
