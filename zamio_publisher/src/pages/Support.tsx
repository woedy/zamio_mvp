import React from 'react';
import ComingSoonPage from './ComingSoon';
import { HelpCircle } from 'lucide-react';

const Support: React.FC = () => {
  return (
    <ComingSoonPage
      title="Help & Support"
      description="Get comprehensive help, troubleshooting guides, and contact support for publisher management questions."
      icon={<HelpCircle className="w-8 h-8" />}
    />
  );
};

export default Support;
