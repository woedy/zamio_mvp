import React from 'react';

interface WelcomeStepProps {
  onNext: () => void;
  onPrevious: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  currentStep: number;
  totalSteps: number;
}

const WelcomeStep: React.FC<WelcomeStepProps> = ({ onNext }) => {
  return (
    <div className="py-8">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-semibold text-white mb-4">
          Welcome to Zamio Publisher
        </h3>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
          Set up your publishing company to start collecting and distributing royalties for your artists and songwriters.
        </p>
      </div>

      <div className="bg-slate-900/60 rounded-2xl border border-white/10 p-8 mb-8">
        <h4 className="text-xl font-semibold text-white mb-6">What you'll set up:</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center">
              <span className="text-indigo-400 font-semibold">1</span>
            </div>
            <div>
              <h5 className="font-medium text-white">Company Profile</h5>
              <p className="text-sm text-slate-400">Your publishing company information</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center">
              <span className="text-indigo-400 font-semibold">2</span>
            </div>
            <div>
              <h5 className="font-medium text-white">Revenue Split</h5>
              <p className="text-sm text-slate-400">Configure writer/publisher splits</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center">
              <span className="text-indigo-400 font-semibold">3</span>
            </div>
            <div>
              <h5 className="font-medium text-white">Artist Management</h5>
              <p className="text-sm text-slate-400">Link and manage your artists</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center">
              <span className="text-indigo-400 font-semibold">4</span>
            </div>
            <div>
              <h5 className="font-medium text-white">Payment Setup</h5>
              <p className="text-sm text-slate-400">Configure royalty collection</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={onNext}
          className="bg-indigo-500 hover:bg-indigo-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          Start Setup
        </button>
      </div>
    </div>
  );
};

export default WelcomeStep;
