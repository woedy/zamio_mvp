import React from 'react';
import OnboardingWizard, { OnboardingStep } from '../../components/onboarding/OnboardingWizard';

// Placeholder step components - will be replaced with actual implementations
const WelcomeStep: React.FC<any> = ({ onNext }) => (
  <div className="text-center py-8">
    <h3 className="text-2xl font-semibold text-white mb-4">Welcome to Zamio!</h3>
    <p className="text-slate-300 mb-6">
      Ghana's premier music royalty management platform. Let's get you set up to start earning from your music.
    </p>
    <button
      onClick={onNext}
      className="bg-indigo-500 hover:bg-indigo-400 text-white px-6 py-3 rounded-lg transition-colors"
    >
      Get Started
    </button>
  </div>
);

const ProfileStep: React.FC<any> = ({ onNext, onPrevious }) => (
  <div className="py-8">
    <h3 className="text-2xl font-semibold text-white mb-4">Complete Your Profile</h3>
    <p className="text-slate-300 mb-6">Tell us about yourself and your music.</p>
    <div className="space-y-4 mb-6">
      <div>
        <label className="block text-sm font-medium text-slate-200 mb-2">Artist Name</label>
        <input
          type="text"
          className="w-full rounded-lg border border-white/20 bg-slate-800/50 px-4 py-3 text-white placeholder:text-slate-400 focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400"
          placeholder="Your artist name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-200 mb-2">Bio</label>
        <textarea
          className="w-full rounded-lg border border-white/20 bg-slate-800/50 px-4 py-3 text-white placeholder:text-slate-400 focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400"
          placeholder="Tell us about your music journey..."
          rows={4}
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

const KYCStep: React.FC<any> = ({ onNext, onPrevious, onSkip }) => (
  <div className="py-8">
    <h3 className="text-2xl font-semibold text-white mb-4">Identity Verification</h3>
    <p className="text-slate-300 mb-6">
      Upload KYC documents for account verification (recommended but optional).
    </p>
    <div className="border-2 border-dashed border-slate-600 rounded-lg p-8 text-center mb-6">
      <p className="text-slate-400 mb-4">Document upload area</p>
      <p className="text-sm text-slate-500">Drag and drop or click to upload</p>
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

const SocialMediaStep: React.FC<any> = ({ onNext, onPrevious, onSkip }) => (
  <div className="py-8">
    <h3 className="text-2xl font-semibold text-white mb-4">Social Media</h3>
    <p className="text-slate-300 mb-6">Connect your social media accounts to enhance your profile.</p>
    <div className="space-y-4 mb-6">
      {['Instagram', 'Twitter', 'Facebook', 'TikTok'].map((platform) => (
        <div key={platform} className="flex items-center justify-between p-4 border border-white/10 rounded-lg">
          <span className="text-slate-200">{platform}</span>
          <button className="text-indigo-400 hover:text-indigo-300 text-sm">
            Connect
          </button>
        </div>
      ))}
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
    <h3 className="text-2xl font-semibold text-white mb-4">Payment Information</h3>
    <p className="text-slate-300 mb-6">Set up your payment method for royalty collection.</p>
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
        Next
      </button>
    </div>
  </div>
);

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
      component: SocialMediaStep,
      isCompleted: false,
      isRequired: false,
    },
    {
      id: 'payment',
      title: 'Payment Info',
      description: 'Add your payment information for royalty collection',
      component: PaymentStep,
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
