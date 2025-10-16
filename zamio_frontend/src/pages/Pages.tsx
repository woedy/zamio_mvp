import React from 'react';
import ComingSoonPage from './ComingSoon';
import { Bell, User, HelpCircle, MessageSquare, Calendar, Users, Upload } from 'lucide-react';

const Notifications: React.FC = () => {
  return (
    <ComingSoonPage
      title="Notifications"
      description="Stay updated with real-time alerts about your music plays, earnings, and important platform updates."
      icon={<Bell className="w-8 h-8" />}
    />
  );
};

const Profile: React.FC = () => {
  return (
    <ComingSoonPage
      title="Profile"
      description="Manage your artist profile, update your information, and customize your dashboard preferences."
      icon={<User className="w-8 h-8" />}
    />
  );
};

const Legal: React.FC = () => {
  return (
    <ComingSoonPage
      title="Legal"
      description="Access legal information, terms of service, privacy policy, and compliance documentation."
      icon={<HelpCircle className="w-8 h-8" />}
    />
  );
};

const Feedback: React.FC = () => {
  return (
    <ComingSoonPage
      title="Feedback & Reviews"
      description="Share your thoughts, report issues, and help us improve the platform with your valuable feedback."
      icon={<MessageSquare className="w-8 h-8" />}
    />
  );
};

const Help: React.FC = () => {
  return (
    <ComingSoonPage
      title="Help & Support"
      description="Get comprehensive help, troubleshooting guides, and contact support for any questions or issues."
      icon={<HelpCircle className="w-8 h-8" />}
    />
  );
};

const Schedule: React.FC = () => {
  return (
    <ComingSoonPage
      title="Schedule"
      description="Manage your release schedule, plan promotional activities, and organize your music calendar."
      icon={<Calendar className="w-8 h-8" />}
    />
  );
};

const Collaborations: React.FC = () => {
  return (
    <ComingSoonPage
      title="Collaborations"
      description="Connect with other artists, manage collaboration projects, and track joint music releases."
      icon={<Users className="w-8 h-8" />}
    />
  );
};

const AllArtistSongs: React.FC = () => {
  return (
    <ComingSoonPage
      title="Music Management"
      description="Upload new tracks, manage your music catalog, and organize your releases across all platforms."
      icon={<Upload className="w-8 h-8" />}
    />
  );
};

export {
  Notifications,
  Profile,
  Legal,
  Feedback,
  Help,
  Schedule,
  Collaborations,
  AllArtistSongs
};
