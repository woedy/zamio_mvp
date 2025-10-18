# ZamIO Admin Disputes Mock Data

## Overview
This document contains realistic mock data for the ZamIO Admin disputes management system. The data represents disputes flagged by various stations across Ghana, providing a comprehensive view of the types of issues that arise in music royalty collection and attribution.

## Sample Stations
These represent the stations that flag disputes to the admin system.

```typescript
const sampleStations = [
  {
    id: 'station-radio-1',
    name: 'Accra FM',
    type: 'radio',
    location: 'Accra, Ghana',
    contact: {
      email: 'info@accrafm.com',
      phone: '+233 30 123 4567'
    }
  },
  {
    id: 'station-tv-1',
    name: 'Ghana TV',
    type: 'tv',
    location: 'Accra, Ghana',
    contact: {
      email: 'content@ghanatv.com',
      phone: '+233 30 987 6543'
    }
  },
  {
    id: 'station-streaming-1',
    name: 'AfroStream',
    type: 'streaming',
    location: 'Kumasi, Ghana',
    contact: {
      email: 'support@afrostream.com',
      phone: '+233 32 456 7890'
    }
  },
  {
    id: 'station-venue-1',
    name: 'National Theatre',
    type: 'venue',
    location: 'Accra, Ghana',
    contact: {
      email: 'events@nationaltheatre.gh',
      phone: '+233 30 222 3333'
    }
  }
];
```

## Sample Disputes
Realistic disputes that would be flagged by stations and managed by admin.

```typescript
const sampleDisputes = [
  // Attribution Disputes
  {
    id: 'dispute-attribution-001',
    title: 'Incorrect Artist Attribution for "Ghana Love"',
    description: 'Station reported incorrect artist attribution for track "Ghana Love" played on 2023-12-15 at 14:30. The system shows artist as "Unknown Artist" but station confirms it should be "Kojo Antwi".',
    type: 'station_flagged',
    category: 'attribution',
    status: 'investigating',
    priority: 'high',
    stationId: 'station-radio-1',
    stationName: 'Accra FM',
    stationType: 'radio',
    stationLocation: 'Accra, Ghana',
    flaggedDate: '2023-12-15T10:30:00Z',
    flaggedBy: 'station-user-1',
    lastUpdated: '2023-12-16T14:20:00Z',
    assignedTo: 'admin-user-1',
    assignedDate: '2023-12-15T11:00:00Z',
    evidence: [
      {
        id: 'evidence-audio-001',
        type: 'audio',
        title: 'Station Recording',
        description: 'Audio recording from station showing the track play with DJ announcement',
        fileUrl: '/evidence/audio/accra-fm-ghana-love-20231215.mp3',
        uploadedBy: 'station-user-1',
        uploadedDate: '2023-12-15T10:35:00Z',
        size: 5242880
      },
      {
        id: 'evidence-document-001',
        type: 'document',
        title: 'Playlist Log',
        description: 'Station playlist log showing track details',
        fileUrl: '/evidence/documents/accra-fm-playlist-20231215.pdf',
        uploadedBy: 'station-user-1',
        uploadedDate: '2023-12-15T10:40:00Z',
        size: 1024000
      }
    ],
    relatedTracks: ['track-ghana-love-001'],
    estimatedImpact: 250.00,
    notes: [
      {
        id: 'note-investigation-001',
        author: 'admin-user-1',
        authorName: 'Admin User',
        content: 'Investigating attribution claim. Need to verify track metadata in database. Contacted content team for verification.',
        timestamp: '2023-12-15T11:05:00Z',
        type: 'update'
      },
      {
        id: 'note-evidence-001',
        author: 'station-user-1',
        authorName: 'Station Manager',
        content: 'Additional evidence uploaded showing DJ announcement clearly stating "Kojo Antwi - Ghana Love".',
        timestamp: '2023-12-15T15:20:00Z',
        type: 'evidence'
      }
    ]
  },

  // Payment Disputes
  {
    id: 'dispute-payment-001',
    title: 'Missing Royalty Payment for Q4 2023',
    description: 'Station has not received expected royalty payment for Q4 2023 performances. Total expected: ₵1,250.00. Last payment received was for Q3 2023.',
    type: 'station_flagged',
    category: 'payment',
    status: 'pending_info',
    priority: 'high',
    stationId: 'station-tv-1',
    stationName: 'Ghana TV',
    stationType: 'tv',
    stationLocation: 'Accra, Ghana',
    flaggedDate: '2023-12-20T09:15:00Z',
    flaggedBy: 'station-user-2',
    lastUpdated: '2023-12-20T16:45:00Z',
    assignedTo: 'admin-user-2',
    assignedDate: '2023-12-20T10:00:00Z',
    evidence: [
      {
        id: 'evidence-document-002',
        type: 'document',
        title: 'Payment Statement Q3',
        description: 'Previous quarter payment statement for reference',
        fileUrl: '/evidence/documents/ghana-tv-payment-q3-2023.pdf',
        uploadedBy: 'station-user-2',
        uploadedDate: '2023-12-20T09:20:00Z',
        size: 2048000
      }
    ],
    estimatedImpact: 1250.00,
    notes: [
      {
        id: 'note-payment-001',
        author: 'admin-user-2',
        authorName: 'Finance Admin',
        content: 'Payment records show Q4 payment was processed on 2023-12-18. Investigating potential bank delay or incorrect account details.',
        timestamp: '2023-12-20T10:15:00Z',
        type: 'update'
      }
    ]
  },

  // Cross-Station Disputes
  {
    id: 'dispute-cross-station-001',
    title: 'Conflicting Attribution Across Multiple Stations',
    description: 'Multiple stations reporting the same track "Accra Nights" with different artist attributions. Accra FM reports "Sarkodie", Kumasi Radio reports "Stonebwoy". Requires cross-station investigation.',
    type: 'cross_station',
    category: 'attribution',
    status: 'escalated',
    priority: 'critical',
    stationId: 'multiple',
    stationName: 'Multiple Stations',
    stationType: 'various',
    stationLocation: 'Various Locations',
    flaggedDate: '2023-12-18T14:00:00Z',
    flaggedBy: 'admin-user-1',
    lastUpdated: '2023-12-19T11:30:00Z',
    assignedTo: 'admin-user-3',
    assignedDate: '2023-12-18T15:00:00Z',
    evidence: [
      {
        id: 'evidence-cross-001',
        type: 'document',
        title: 'Station Reports Compilation',
        description: 'Compiled reports from Accra FM and Kumasi Radio',
        fileUrl: '/evidence/documents/cross-station-attribution-report.pdf',
        uploadedBy: 'admin-user-1',
        uploadedDate: '2023-12-18T14:05:00Z',
        size: 1536000
      }
    ],
    relatedTracks: ['track-accra-nights-001'],
    affectedStations: ['station-radio-1', 'station-radio-2'],
    estimatedImpact: 500.00,
    notes: [
      {
        id: 'note-escalation-001',
        author: 'admin-user-1',
        authorName: 'Admin User',
        content: 'Escalated to senior content team due to conflicting attributions across stations. Potential metadata error in central database.',
        timestamp: '2023-12-18T15:10:00Z',
        type: 'escalation'
      }
    ]
  },

  // Technical Disputes
  {
    id: 'dispute-technical-001',
    title: 'API Connectivity Issues with Attribution System',
    description: 'Streaming station experiencing intermittent API failures when submitting track attributions. Issue started on 2023-12-14 and affects real-time reporting.',
    type: 'station_flagged',
    category: 'technical',
    status: 'investigating',
    priority: 'medium',
    stationId: 'station-streaming-1',
    stationName: 'AfroStream',
    stationType: 'streaming',
    stationLocation: 'Kumasi, Ghana',
    flaggedDate: '2023-12-14T16:45:00Z',
    flaggedBy: 'station-user-3',
    lastUpdated: '2023-12-17T10:15:00Z',
    assignedTo: 'admin-user-4',
    assignedDate: '2023-12-15T09:00:00Z',
    evidence: [
      {
        id: 'evidence-log-001',
        type: 'log',
        title: 'API Error Logs',
        description: 'System logs showing API timeout errors',
        fileUrl: '/evidence/logs/afrostream-api-errors-20231214.log',
        uploadedBy: 'station-user-3',
        uploadedDate: '2023-12-14T17:00:00Z',
        size: 3072000
      }
    ],
    estimatedImpact: 0.00, // Technical issue, no direct financial impact
    notes: [
      {
        id: 'note-technical-001',
        author: 'admin-user-4',
        authorName: 'Tech Admin',
        content: 'Investigating API connectivity. Logs show timeout errors during peak hours. Checking server capacity and network configuration.',
        timestamp: '2023-12-15T09:15:00Z',
        type: 'update'
      }
    ]
  },

  // Data Discrepancy Disputes
  {
    id: 'dispute-data-001',
    title: 'Play Count Discrepancy for "Kumasi Vibes"',
    description: 'Venue reports 15 plays of track "Kumasi Vibes" but system only shows 12 plays. Discrepancy of 3 plays affects royalty calculation.',
    type: 'station_flagged',
    category: 'data',
    status: 'resolved',
    priority: 'medium',
    stationId: 'station-venue-1',
    stationName: 'National Theatre',
    stationType: 'venue',
    stationLocation: 'Accra, Ghana',
    flaggedDate: '2023-12-10T13:20:00Z',
    flaggedBy: 'station-user-4',
    lastUpdated: '2023-12-12T16:30:00Z',
    assignedTo: 'admin-user-2',
    assignedDate: '2023-12-10T14:00:00Z',
    resolvedDate: '2023-12-12T16:30:00Z',
    evidence: [
      {
        id: 'evidence-manual-001',
        type: 'document',
        title: 'Manual Play Count Log',
        description: 'Venue\'s manual log of track plays',
        fileUrl: '/evidence/documents/national-theatre-manual-log-20231210.pdf',
        uploadedBy: 'station-user-4',
        uploadedDate: '2023-12-10T13:25:00Z',
        size: 512000
      }
    ],
    relatedTracks: ['track-kumasi-vibes-001'],
    estimatedImpact: 75.00,
    resolution: {
      id: 'resolution-001',
      resolvedBy: 'admin-user-2',
      resolvedDate: '2023-12-12T16:30:00Z',
      outcome: 'partial',
      action: 'Adjusted play count from 12 to 14 plays. Missing play was due to system sync delay.',
      compensation: 0.00,
      notes: 'System sync issue identified and resolved. Play count discrepancy was due to delayed data synchronization.'
    },
    notes: [
      {
        id: 'note-resolution-001',
        author: 'admin-user-2',
        authorName: 'Finance Admin',
        content: 'Resolution completed. Play count adjusted and royalties recalculated.',
        timestamp: '2023-12-12T16:35:00Z',
        type: 'resolution'
      }
    ]
  }
];
```

## Admin Users
Users who manage and resolve disputes.

```typescript
const sampleAdminUsers = [
  {
    id: 'admin-user-1',
    name: 'Admin User',
    role: 'Content Manager',
    email: 'admin@zamio.com'
  },
  {
    id: 'admin-user-2',
    name: 'Finance Admin',
    role: 'Finance Manager',
    email: 'finance@zamio.com'
  },
  {
    id: 'admin-user-3',
    name: 'Senior Admin',
    role: 'Senior Manager',
    email: 'senior@zamio.com'
  },
  {
    id: 'admin-user-4',
    name: 'Tech Admin',
    role: 'Technical Manager',
    email: 'tech@zamio.com'
  }
];
```

## Usage in Components

### Filtering and Search
- Filter by status: `disputes.filter(d => d.status === 'open')`
- Filter by station: `disputes.filter(d => d.stationId === selectedStation)`
- Filter by priority: `disputes.filter(d => d.priority === 'high')`
- Search by title/description: `disputes.filter(d => d.title.toLowerCase().includes(searchTerm))`

### Status Distribution
```typescript
const statusCounts = {
  open: disputes.filter(d => d.status === 'open').length,
  investigating: disputes.filter(d => d.status === 'investigating').length,
  pending_info: disputes.filter(d => d.status === 'pending_info').length,
  escalated: disputes.filter(d => d.status === 'escalated').length,
  resolved: disputes.filter(d => d.status === 'resolved').length,
  closed: disputes.filter(d => d.status === 'closed').length
};
```

### Station Impact Analysis
```typescript
const stationDisputes = disputes.reduce((acc, dispute) => {
  if (!acc[dispute.stationId]) {
    acc[dispute.stationId] = {
      count: 0,
      totalImpact: 0,
      resolvedCount: 0
    };
  }
  acc[dispute.stationId].count++;
  acc[dispute.stationId].totalImpact += dispute.estimatedImpact;
  if (dispute.status === 'resolved') {
    acc[dispute.stationId].resolvedCount++;
  }
  return acc;
}, {});
```

This mock data provides a realistic foundation for testing the disputes management interface, covering various dispute types, stations, and resolution scenarios common in music royalty collection systems.
