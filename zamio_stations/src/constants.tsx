// Demo data for Match Dispute Management
export const demoDisputes = [
  {
    id: 1,
    track_title: 'Midnight Vibes',
    artist_name: 'Ghana Artists Collective',
    start_time: '2024-01-15 14:30:00',
    stop_time: '2024-01-15 14:33:45',
    duration: '3:45',
    confidence: 98,
    earnings: 2.50,
    status: 'Flagged',
    comment: 'Low confidence match detected',
    timestamp: '2024-01-15 14:35:00',
    cover_art: '/demo-images/midnight-vibes.jpg',
    audio_file_mp3: '/demo-audio/midnight-vibes.mp3',
    release_date: '2023-12-01',
    plays: 15,
    title: 'Midnight Vibes',
    playLogs: [
      { time: '2024-01-15 14:30:00', station: 'Peace FM', region: 'Accra' },
      { time: '2024-01-15 12:15:00', station: 'Hitz FM', region: 'Kumasi' },
    ]
  },
  {
    id: 2,
    track_title: 'Ghana My Home',
    artist_name: 'Pat Thomas',
    start_time: '2024-01-15 12:15:00',
    stop_time: '2024-01-15 12:19:12',
    duration: '4:12',
    confidence: 96,
    earnings: 2.80,
    status: 'Resolved',
    comment: 'Verified match - no issues',
    timestamp: '2024-01-15 12:20:00',
    cover_art: '/demo-images/ghana-my-home.jpg',
    audio_file_mp3: '/demo-audio/ghana-my-home.mp3',
    release_date: '2023-11-15',
    plays: 22,
    title: 'Ghana My Home',
    playLogs: [
      { time: '2024-01-15 12:15:00', station: 'Hitz FM', region: 'Kumasi' },
      { time: '2024-01-15 10:45:00', station: 'Joy FM', region: 'Accra' },
    ]
  },
  {
    id: 3,
    track_title: 'Love Letter',
    artist_name: 'Sarkodie ft. Efya',
    start_time: '2024-01-15 10:45:00',
    stop_time: '2024-01-15 10:48:28',
    duration: '3:28',
    confidence: 94,
    earnings: 2.20,
    status: 'Flagged',
    comment: 'Potential duplicate detection',
    timestamp: '2024-01-15 10:50:00',
    cover_art: '/demo-images/love-letter.jpg',
    audio_file_mp3: '/demo-audio/love-letter.mp3',
    release_date: '2023-10-20',
    plays: 18,
    title: 'Love Letter',
    playLogs: [
      { time: '2024-01-15 10:45:00', station: 'Joy FM', region: 'Accra' },
      { time: '2024-01-15 09:20:00', station: 'Adom FM', region: 'Tema' },
    ]
  },
  {
    id: 4,
    track_title: 'Midnight Vibes',
    artist_name: 'Ghana Artists Collective',
    start_time: '2024-01-15 09:20:00',
    stop_time: '2024-01-15 09:23:45',
    duration: '3:45',
    confidence: 92,
    earnings: 2.50,
    status: 'Pending',
    comment: 'Under review by admin',
    timestamp: '2024-01-15 09:25:00',
    cover_art: '/demo-images/midnight-vibes.jpg',
    audio_file_mp3: '/demo-audio/midnight-vibes.mp3',
    release_date: '2023-12-01',
    plays: 15,
    title: 'Midnight Vibes',
    playLogs: [
      { time: '2024-01-15 09:20:00', station: 'Adom FM', region: 'Tema' },
      { time: '2024-01-15 08:10:00', station: 'Okay FM', region: 'Cape Coast' },
    ]
  },
  {
    id: 5,
    track_title: 'Ghana My Home',
    artist_name: 'Pat Thomas',
    start_time: '2024-01-15 08:10:00',
    stop_time: '2024-01-15 08:14:12',
    duration: '4:12',
    confidence: 89,
    earnings: 2.80,
    status: 'Dispute',
    comment: 'Artist disputes this match',
    timestamp: '2024-01-15 08:15:00',
    cover_art: '/demo-images/ghana-my-home.jpg',
    audio_file_mp3: '/demo-audio/ghana-my-home.mp3',
    release_date: '2023-11-15',
    plays: 22,
    title: 'Ghana My Home',
    playLogs: [
      { time: '2024-01-15 08:10:00', station: 'Okay FM', region: 'Cape Coast' },
    ]
  }
];

// Demo base URLs (for development only)
export const baseUrl = 'https://api.zamio.com/';
export const baseUrlMedia = 'https://media.zamio.com/';

// Demo station and user data
export const stationID = 'demo-station-123';
export const userToken = 'demo-token-abc123';
