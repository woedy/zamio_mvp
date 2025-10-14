import React from 'react';
import OnboardingWizard, { OnboardingStep } from '../../components/onboarding/OnboardingWizard';
import WelcomeStep from './Onboarding/steps/WelcomeStep';
import ProfileStep from './Onboarding/steps/ProfileStep';
import KYCStep from './Onboarding/steps/KYCStep';
import SocialMediaInfo from './Onboarding/SocialMediaInfo';
import PaymentInfo from './Onboarding/PaymentInfo';

// Placeholder step components - will be replaced with actual implementations
const PublisherStep: React.FC<any> = ({ onNext, onPrevious, onSkip }) => (
  <div className="py-8">
    <h3 className="text-2xl font-semibold text-white mb-4">Publisher (Optional)</h3>
    <p className="text-slate-300 mb-6">Connect with a publisher if you have one, or continue as self-published.</p>
    <div className="space-y-4 mb-6">
      <div className="p-4 border border-white/10 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-slate-200">Self-Published Artist</span>
          <span className="text-green-400 text-sm">✓ Recommended</span>
        </div>
        <p className="text-sm text-slate-400">
          You have full control over your music and receive royalty payments directly.
        </p>
      </div>
      <div className="p-4 border border-white/10 rounded-lg opacity-50">
        <div className="flex items-center justify-between mb-2">
          <span className="text-slate-200">Connect Publisher</span>
        </div>
        <p className="text-sm text-slate-400">
          Link your account with an existing publisher (demo - not functional).
        </p>
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

export default function ArtistOnboarding() {
  const steps: OnboardingStep[] = [
    {
      id: 'welcome',
      title: 'Welcome',
      description: 'Learn about ZamIO and your self-publishing setup',
      component: WelcomeStep,
      isCompleted: true,
      isRequired: true,
    },
    {
      id: 'profile',
      title: 'Profile',
      description: 'Complete your artist profile information',
      component: ProfileStep,
      isCompleted: false,
      isRequired: true,
    },
    {
      id: 'kyc',
      title: 'Identity Verification',
      description: 'Upload KYC documents for account verification',
      component: KYCStep,
      isCompleted: false,
      isRequired: false,
    },
    {
      id: 'social-media',
      title: 'Social Media',
      description: 'Connect your social media accounts',
      component: SocialMediaInfo,
      isCompleted: false,
      isRequired: false,
    },
    {
      id: 'payment',
      title: 'Payment Info',
      description: 'Add your payment information for royalty collection',
      component: PaymentInfo,
      isCompleted: false,
      isRequired: false,
    },
    {
      id: 'publisher',
      title: 'Publisher (Optional)',
      description: 'Connect with a publisher if you have one',
      component: PublisherStep,
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
      title="Artist Onboarding"
      subtitle="Let's get you set up to start earning from your music"
      initialStepId="welcome"
    />
  );
}
