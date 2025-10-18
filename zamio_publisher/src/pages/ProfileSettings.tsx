import React from 'react';
import ComingSoonPage from './ComingSoon';
import { User } from 'lucide-react';

const ProfileSettings: React.FC = () => {
  return (
    <ComingSoonPage
      title="Profile & Settings"
      description="Manage your publisher profile, account settings, and platform preferences."
      icon={<User className="w-8 h-8" />}
    />
  );
};

export default ProfileSettings;
