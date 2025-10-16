import React from 'react';
import ComingSoonPage from './ComingSoon';
import { Settings as SettingsIcon } from 'lucide-react';

const Settings: React.FC = () => {
  return (
    <ComingSoonPage
      title="Settings"
      description="Configure your account preferences, notification settings, privacy options, and platform integrations."
      icon={<SettingsIcon className="w-8 h-8" />}
    />
  );
};

export default Settings;
