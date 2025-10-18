# ZamIO Admin Disputes Data Structure

## Overview
This document defines the data structures and interfaces for the ZamIO Admin disputes management system. The admin interface manages disputes flagged by stations, providing oversight for cross-station issues and resolution workflows.

## Core Data Types

### DisputeStatus
```typescript
type DisputeStatus = 'open' | 'investigating' | 'pending_info' | 'escalated' | 'resolved' | 'closed';
```

### DisputePriority
```typescript
type DisputePriority = 'low' | 'medium' | 'high' | 'critical';
```

### DisputeType
```typescript
type DisputeType = 'station_flagged' | 'cross_station' | 'system_issue' | 'data_discrepancy' | 'payment_issue';
```

### DisputeCategory
```typescript
type DisputeCategory = 'attribution' | 'payment' | 'data' | 'technical' | 'policy' | 'other';
```

## Main Interfaces

### Dispute Interface
```typescript
interface Dispute {
  id: string;
  title: string;
  description: string;
  type: DisputeType;
  category: DisputeCategory;
  status: DisputeStatus;
  priority: DisputePriority;

  // Station Information
  stationId: string;
  stationName: string;
  stationType: 'radio' | 'tv' | 'streaming' | 'venue';
  stationLocation: string;

  // Timeline
  flaggedDate: string; // ISO date string
  flaggedBy: string; // User ID who flagged
  lastUpdated: string;
  resolvedDate?: string;

  // Assignment
  assignedTo?: string; // Admin user ID
  assignedDate?: string;

  // Evidence and Context
  evidence: DisputeEvidence[];
  relatedTracks?: string[]; // Track IDs
  relatedAgreements?: string[]; // Agreement IDs
  affectedStations?: string[]; // For cross-station disputes

  // Resolution
  resolution?: DisputeResolution;
  notes: DisputeNote[];

  // Metrics
  estimatedImpact: number; // Financial or operational impact
  resolutionTime?: number; // Hours to resolve
}
```

### DisputeEvidence Interface
```typescript
interface DisputeEvidence {
  id: string;
  type: 'audio' | 'document' | 'screenshot' | 'log' | 'other';
  title: string;
  description?: string;
  fileUrl?: string;
  uploadedBy: string;
  uploadedDate: string;
  size?: number; // File size in bytes
}
```

### DisputeResolution Interface
```typescript
interface DisputeResolution {
  id: string;
  resolvedBy: string;
  resolvedDate: string;
  outcome: 'upheld' | 'dismissed' | 'partial' | 'escalated';
  action: string; // Description of resolution action
  compensation?: number; // Any compensation awarded
  notes: string;
}
```

### DisputeNote Interface
```typescript
interface DisputeNote {
  id: string;
  author: string; // User ID
  authorName: string;
  content: string;
  timestamp: string;
  type: 'update' | 'evidence' | 'resolution' | 'escalation';
}
```

## Workflow States

### Dispute Lifecycle
```
Flagged by Station → Open → Investigating → Pending Info → Resolved
     ↓              ↓         ↓              ↓
  Cross-Station    Assigned  Escalated      Closed
     Issue         to Admin    to Higher     (Auto-close)
```

### Status Transitions
- **Open**: Initial state when flagged by station
- **Investigating**: Admin assigned and actively working
- **Pending Info**: Waiting for additional information from station/user
- **Escalated**: Moved to higher-level admin or legal team
- **Resolved**: Issue resolved with outcome recorded
- **Closed**: Final state, no further action needed

## Mock Data Structure

### Sample Stations
```typescript
const sampleStations = [
  {
    id: 'station-radio-1',
    name: 'Accra FM',
    type: 'radio',
    location: 'Accra, Ghana'
  },
  {
    id: 'station-tv-1',
    name: 'Ghana TV',
    type: 'tv',
    location: 'Accra, Ghana'
  },
  {
    id: 'station-streaming-1',
    name: 'AfroStream',
    type: 'streaming',
    location: 'Kumasi, Ghana'
  }
];
```

### Sample Disputes
```typescript
const sampleDisputes = [
  {
    id: 'dispute-001',
    title: 'Incorrect Attribution for Track "Ghana Love"',
    description: 'Station reported incorrect artist attribution for track played on 2023-12-15',
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
        id: 'evidence-001',
        type: 'audio',
        title: 'Station Recording',
        description: 'Audio recording from station showing the track play',
        fileUrl: '/evidence/audio/station-recording-001.mp3',
        uploadedBy: 'station-user-1',
        uploadedDate: '2023-12-15T10:35:00Z',
        size: 5242880
      }
    ],
    relatedTracks: ['track-ghana-love-001'],
    estimatedImpact: 250.00,
    notes: [
      {
        id: 'note-001',
        author: 'admin-user-1',
        authorName: 'Admin User',
        content: 'Investigating attribution claim. Need to verify track metadata.',
        timestamp: '2023-12-15T11:05:00Z',
        type: 'update'
      }
    ]
  },
  // Additional sample disputes...
];
```

## Integration Points

### Station Integration
- Disputes originate from station interfaces
- Station users flag issues through their dashboards
- Admin can request additional information from stations

### User Management
- Admin users assigned to disputes
- Role-based permissions for dispute resolution
- Notification system for updates

### Partners Integration
- Some disputes may involve partner agreements
- Cross-reference with partner data for international issues

### Analytics Integration
- Dispute metrics feed into admin analytics
- Resolution time tracking for performance monitoring

## Design Considerations

### Admin Context
- Focus on oversight and coordination across stations
- Provide tools for bulk operations and pattern analysis
- Clear escalation paths for complex issues

### Station Context
- Simple flagging interface for station users
- Clear communication channels with admin team
- Transparency in resolution process

### Performance
- Efficient filtering and search for large dispute volumes
- Pagination for dispute lists
- Caching for frequently accessed dispute data
