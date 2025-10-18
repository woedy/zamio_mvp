import React from 'react';
import ComingSoonPage from './ComingSoon';
import { FileText } from 'lucide-react';

const ContractsLegal: React.FC = () => {
  return (
    <ComingSoonPage
      title="Contracts & Legal"
      description="Manage artist contracts, licensing agreements, and ensure compliance with music industry regulations."
      icon={<FileText className="w-8 h-8" />}
    />
  );
};

export default ContractsLegal;
