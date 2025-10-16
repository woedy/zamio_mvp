import React from 'react';
import ComingSoonPage from './ComingSoon';
import { Clock } from 'lucide-react';

const MatchLogs: React.FC = () => {
  return (
    <ComingSoonPage
      title="Play Logs"
      description="View detailed play history, track performance, and analyze your music's airplay across all stations and platforms."
      icon={<Clock className="w-8 h-8" />}
    />
  );
};

export default MatchLogs;
