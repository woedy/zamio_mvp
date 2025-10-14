import React from 'react';

interface RevenueSplitStepProps {
  onNext: () => void;
  onPrevious: () => void;
}

const RevenueSplitStep: React.FC<RevenueSplitStepProps> = ({ onNext, onPrevious }) => {
  return (
    <div className="py-8">
      <h3 className="text-2xl font-semibold text-white mb-4">Revenue Split Configuration</h3>
      <p className="text-slate-300 mb-6">Revenue split configuration step placeholder - to be implemented</p>

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
          Next
        </button>
      </div>
    </div>
  );
};

export default RevenueSplitStep;
