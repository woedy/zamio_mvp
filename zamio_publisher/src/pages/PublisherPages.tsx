import React from 'react';
import ComingSoonPage from './ComingSoon';
import PlayLogs from './PlayLogs';
import ArtistsManagement from './ArtistsManagement';
import {
  Users,
  Music,
  DollarSign,
  BarChart3,
  FileText,
  User,
  HelpCircle,
  Settings
} from 'lucide-react';

// ArtistsManagement Page - Now imported from dedicated file

// CatalogManagement Page
const CatalogManagement: React.FC = () => {
  return (
    <ComingSoonPage
      title="Catalog Management"
      description="Organize and manage your music catalog, track releases, and monitor performance across all platforms."
      icon={<Music className="w-8 h-8" />}
    />
  );
};

// RoyaltiesPayments Page
const RoyaltiesPayments: React.FC = () => {
  return (
    <ComingSoonPage
      title="Royalties & Payments"
      description="Track earnings, manage royalty distributions, and handle payments to artists and rights holders."
      icon={<DollarSign className="w-8 h-8" />}
    />
  );
};

// ReportsAnalytics Page
const ReportsAnalytics: React.FC = () => {
  return (
    <ComingSoonPage
      title="Reports & Analytics"
      description="Access comprehensive reports and analytics on your catalog performance, artist success, and revenue streams."
      icon={<BarChart3 className="w-8 h-8" />}
    />
  );
};

// ContractsLegal Page
const ContractsLegal: React.FC = () => {
  return (
    <ComingSoonPage
      title="Contracts & Legal"
      description="Manage artist contracts, licensing agreements, and ensure compliance with music industry regulations."
      icon={<FileText className="w-8 h-8" />}
    />
  );
};

// ProfileSettings Page
const ProfileSettings: React.FC = () => {
  return (
    <ComingSoonPage
      title="Profile & Settings"
      description="Manage your publisher profile, account settings, and platform preferences."
      icon={<User className="w-8 h-8" />}
    />
  );
};

// Support Page
const Support: React.FC = () => {
  return (
    <ComingSoonPage
      title="Help & Support"
      description="Get comprehensive help, troubleshooting guides, and contact support for publisher management questions."
      icon={<HelpCircle className="w-8 h-8" />}
    />
  );
};

export {
  ArtistsManagement,
  CatalogManagement,
  RoyaltiesPayments,
  ReportsAnalytics,
  ContractsLegal,
  ProfileSettings,
  Support,
  PlayLogs
};
