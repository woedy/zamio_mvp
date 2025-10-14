import React from 'react';

interface PublisherPaymentStepProps {
  onNext: () => void;
  onPrevious: () => void;
}

const PublisherPaymentStep: React.FC<PublisherPaymentStepProps> = ({ onNext, onPrevious }) => {
  return (
    <div className="py-8">
      <h3 className="text-2xl font-semibold text-white mb-4">Payment Setup</h3>
      <p className="text-slate-300 mb-6">Payment setup step placeholder - to be implemented</p>

      <div className="flex space-x-3">
        <button
          onClick={onPrevious}
          className="bg-slate-800/50 hover:bg-slate-800 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Previous
        </button>
        <button
          onClick={onNext}
          className="bg-indigo-500 hover:bg-indigo-400 text-white px-6 py-2 rounded-lg transition-colors"
        >
          Complete Setup
        </button>
      </div>
    </div>
  );
};

export default PublisherPaymentStep;
