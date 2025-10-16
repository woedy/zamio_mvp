import React from 'react';
import ComingSoonPage from './ComingSoon';
import { DollarSign } from 'lucide-react';

const RoyaltyPayments: React.FC = () => {
  return (
    <ComingSoonPage
      title="Royalty Payments"
      description="Track your earnings, view payment history, and manage your royalty distributions across all platforms and territories."
      icon={<DollarSign className="w-8 h-8" />}
    />
  );
};

export default RoyaltyPayments;
