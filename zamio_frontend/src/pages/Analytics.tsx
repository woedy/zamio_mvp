import React from 'react';
import ComingSoonPage from './ComingSoon';
import { BarChart3 } from 'lucide-react';

const Analytics: React.FC = () => {
  return (
    <ComingSoonPage
      title="Analytics"
      description="Deep dive into your music performance with comprehensive analytics, trends, and insights to optimize your royalty earnings."
      icon={<BarChart3 className="w-8 h-8" />}
    />
  );
};

export default Analytics;
