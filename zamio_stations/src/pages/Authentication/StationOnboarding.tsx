import React from 'react';
import OnboardingWizard, { OnboardingStep } from '../../components/onboarding/OnboardingWizard';
import WelcomeStep from './Onboarding/steps/WelcomeStep';
import ProfileStep from './Onboarding/steps/ProfileStep';

const StreamSetupStep: React.FC<any> = ({ onNext, onPrevious }) => (
  <div className="py-8">
    <h3 className="text-2xl font-semibold text-white mb-4">Stream Configuration</h3>
    <p className="text-slate-300 mb-6">Set up your audio streams for monitoring and reporting.</p>
    <div className="space-y-4 mb-6">
      <div>
        <label className="block text-sm font-medium text-slate-200 mb-2">Primary Stream URL</label>
        <input
          type="url"
          className="w-full rounded-lg border border-white/20 bg-slate-800/50 px-4 py-3 text-white placeholder:text-slate-400 focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400"
          placeholder="https://your-station-stream.com"
        />
      </div>
    </div>
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

const StaffStep: React.FC<any> = ({ onNext, onPrevious }) => (
  <div className="py-8">
    <h3 className="text-2xl font-semibold text-white mb-4">Staff Management</h3>
    <p className="text-slate-300 mb-6">Add team members and assign roles for station operations.</p>
    <div className="border-2 border-dashed border-slate-600 rounded-lg p-8 text-center mb-6">
      <p className="text-slate-400 mb-4">Staff management interface</p>
      <p className="text-sm text-slate-500">Add team members and assign roles</p>
    </div>
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

const ComplianceStep: React.FC<any> = ({ onNext, onPrevious, onSkip }) => (
  <div className="py-8">
    <h3 className="text-2xl font-semibold text-white mb-4">Compliance Setup</h3>
    <p className="text-slate-300 mb-6">Configure regulatory compliance and reporting requirements.</p>
    <div className="border-2 border-dashed border-slate-600 rounded-lg p-8 text-center mb-6">
      <p className="text-slate-400 mb-4">Compliance documentation upload</p>
      <p className="text-sm text-slate-500">Upload regulatory documents and certificates</p>
    </div>
    <div className="flex space-x-3">
      <button
        onClick={onPrevious}
        className="bg-slate-800/50 hover:bg-slate-800 text-white px-4 py-2 rounded-lg transition-colors"
      >
        Previous
      </button>
      <button
        onClick={onSkip}
        className="border border-white/20 hover:border-indigo-400 text-slate-300 hover:text-white px-4 py-2 rounded-lg transition-colors"
      >
        Skip
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

const PaymentStep: React.FC<any> = ({ onNext, onPrevious, onSkip }) => (
  <div className="py-8">
    <h3 className="text-2xl font-semibold text-white mb-4">Payment Setup</h3>
    <p className="text-slate-300 mb-6">Configure payment methods for station revenue collection.</p>
    <div className="space-y-4 mb-6">
      <div className="space-y-2">
        <label className="text-slate-200">Payment Method</label>
        <div className="space-y-2">
          {[
            { id: 'momo', label: 'Mobile Money (MTN, Vodafone, AirtelTigo)' },
            { id: 'bank', label: 'Bank Transfer' }
          ].map((method) => (
            <label key={method.id} className="flex items-center space-x-3">
              <input type="radio" name="paymentMethod" value={method.id} className="text-indigo-500" />
              <span className="text-slate-200">{method.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
    <div className="flex space-x-3">
      <button
        onClick={onPrevious}
        className="bg-slate-800/50 hover:bg-slate-800 text-white px-4 py-2 rounded-lg transition-colors"
      >
        Previous
      </button>
      <button
        onClick={onSkip}
        className="border border-white/20 hover:border-indigo-400 text-slate-300 hover:text-white px-4 py-2 rounded-lg transition-colors"
      >
        Skip
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

export default function StationOnboarding() {
  const steps: OnboardingStep[] = [
    {
      id: 'welcome',
      title: 'Welcome',
      description: 'Introduction to Zamio Stations platform',
      component: WelcomeStep,
      isCompleted: true,
      isRequired: true,
    },
    {
      id: 'profile',
      title: 'Station Profile',
      description: 'Set up your station details and licensing',
      component: ProfileStep,
      isCompleted: false,
      isRequired: true,
    },
    {
      id: 'stream-setup',
      title: 'Stream Configuration',
      description: 'Configure audio streams for monitoring',
      component: StreamSetupStep,
      isCompleted: false,
      isRequired: true,
    },
    {
      id: 'staff',
      title: 'Staff Management',
      description: 'Add team members and assign roles',
      component: StaffStep,
      isCompleted: false,
      isRequired: false,
    },
    {
      id: 'compliance',
      title: 'Compliance Setup',
      description: 'Configure regulatory compliance',
      component: ComplianceStep,
      isCompleted: false,
      isRequired: false,
    },
    {
      id: 'payment',
      title: 'Payment Setup',
      description: 'Configure revenue collection methods',
      component: PaymentStep,
      isCompleted: false,
      isRequired: false,
    },
  ];

  const handleComplete = () => {
    // Navigate to dashboard
    window.location.href = '/dashboard';
  };

  return (
    <OnboardingWizard
      steps={steps}
      onComplete={handleComplete}
      title="Station Onboarding"
      subtitle="Complete your station setup for music monitoring and royalty management"
      initialStepId="welcome"
    />
  );
}
