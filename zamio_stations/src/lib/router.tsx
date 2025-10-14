import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { ReactNode } from 'react';

// Placeholder for auth check (to be implemented in later tasks)
const isAuthenticated = () => {
  // For now, always return false; integrate with auth context later
  return false;
};

// Private Route Component
const PrivateRoute = ({ children }: { children: ReactNode }) => {
  return isAuthenticated() ? <>{children}</> : <Navigate to="/signin" replace />;
};

// Public Route Component (redirect to dashboard if authenticated)
const PublicRoute = ({ children }: { children: ReactNode }) => {
  return !isAuthenticated() ? <>{children}</> : <Navigate to="/dashboard" replace />;
};

// Import onboarding components
import OnboardingWizard from '../components/onboarding/OnboardingWizard';
import StationOnboarding from '../pages/Authentication/StationOnboarding';

// Import pages (assuming they exist in pages/)
import ZamIOLandingPage from '../pages/Landing';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import EmailVerification from '../pages/EmailVerification';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PublicRoute>
        <ZamIOLandingPage />
      </PublicRoute>
    ),
  },
  {
    path: '/signin',
    element: (
      <PublicRoute>
        <SignIn />
      </PublicRoute>
    ),
  },
  {
    path: '/signup',
    element: (
      <PublicRoute>
        <SignUp />
      </PublicRoute>
    ),
  },
  {
    path: '/verify-email',
    element: (
      <PublicRoute>
        <EmailVerification />
      </PublicRoute>
    ),
  },
  {
    path: '/onboarding',
    element: (
      <PublicRoute>
        <StationOnboarding />
      </PublicRoute>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  // Catch-all route for 404 errors - must be last
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
