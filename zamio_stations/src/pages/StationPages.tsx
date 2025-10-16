import React from 'react';
import ComingSoonPage from './ComingSoon';
import PlayLogs from './PlayLogs';
import {
  Search,
  AlertTriangle,
  User,
  Users,
  Shield,
  FileSearch,
  Bell,
  HelpCircle,
  Radio as RadioIcon,
  Headphones,
} from 'lucide-react';

// MatchLogs Page
const MatchLogs: React.FC = () => {
  return <PlayLogs />;
};

// MatchDisputes Page
const MatchDisputes: React.FC = () => {
  return (
    <ComingSoonPage
      title="Match Disputes"
      description="Manage and resolve music identification disputes, review contested matches, and maintain accurate reporting."
      icon={<AlertTriangle className="w-8 h-8" />}
    />
  );
};

// Profile Page
const Profile: React.FC = () => {
  return (
    <ComingSoonPage
      title="Station Profile"
      description="Manage your station profile, update station information, and configure monitoring preferences."
      icon={<User className="w-8 h-8" />}
    />
  );
};

// StaffManagement Page
const StaffManagement: React.FC = () => {
  return (
    <ComingSoonPage
      title="Staff Management"
      description="Manage station staff, assign roles and permissions, and track team performance across monitoring activities."
      icon={<Users className="w-8 h-8" />}
    />
  );
};

// Compliance Page
const Compliance: React.FC = () => {
  return (
    <ComingSoonPage
      title="Compliance Management"
      description="Monitor license compliance, track regulatory requirements, and ensure your station meets all broadcasting standards."
      icon={<Shield className="w-8 h-8" />}
    />
  );
};

// PlaylogManagement Page
const PlaylogManagement: React.FC = () => {
  return <PlayLogs />;
};

// Notifications Page
const Notifications: React.FC = () => {
  return (
    <ComingSoonPage
      title="Notifications"
      description="Stay updated with real-time alerts about system status, detection results, and important station updates."
      icon={<Bell className="w-8 h-8" />}
    />
  );
};

// Help Page
const Help: React.FC = () => {
  return (
    <ComingSoonPage
      title="Help & Support"
      description="Get comprehensive help, troubleshooting guides, and contact support for station management questions."
      icon={<HelpCircle className="w-8 h-8" />}
    />
  );
};

// RadioStream Page
const RadioStream: React.FC = () => {
  return (
    <ComingSoonPage
      title="Radio Stream Monitor"
      description="Monitor live radio streams, track music detection in real-time, and manage broadcast quality monitoring."
      icon={<RadioIcon className="w-8 h-8" />}
    />
  );
};

// AudioStream Page
const AudioStream: React.FC = () => {
  return (
    <ComingSoonPage
      title="Audio Stream Matcher"
      description="Process audio files for music identification, manage batch processing, and review matching results."
      icon={<Headphones className="w-8 h-8" />}
    />
  );
};

export {
  MatchLogs,
  MatchDisputes,
  Profile,
  StaffManagement,
  Compliance,
  PlaylogManagement,
  Notifications,
  Help,
  RadioStream,
  AudioStream
};
