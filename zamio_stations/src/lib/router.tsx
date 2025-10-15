import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { ReactNode } from 'react';

// Placeholder for auth check (to be implemented in later tasks)
const isAuthenticated = () => {
  // Temporarily return true for dashboard preview
  return true;
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
import Layout from '../components/Layout';

// Placeholder components for station features
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="p-8">
    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{title}</h1>
    <p className="text-gray-600 dark:text-gray-300">This page is under development and will be implemented in future phases.</p>
  </div>
);

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <PublicRoute>
            <ZamIOLandingPage />
          </PublicRoute>
        } />
        <Route path="/signin" element={
          <PublicRoute>
            <SignIn />
          </PublicRoute>
        } />
        <Route path="/signup" element={
          <PublicRoute>
            <SignUp />
          </PublicRoute>
        } />
        <Route path="/verify-email" element={
          <PublicRoute>
            <EmailVerification />
          </PublicRoute>
        } />
        <Route path="/onboarding" element={
          <PublicRoute>
            <StationOnboarding />
          </PublicRoute>
        } />

        {/* Station Dashboard Routes */}
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        } />
        <Route path="/match-logs" element={
          <PrivateRoute>
            <Layout>
              <PlaceholderPage title="Match Logs" />
            </Layout>
          </PrivateRoute>
        } />
        <Route path="/match-disputes" element={
          <PrivateRoute>
            <Layout>
              <PlaceholderPage title="Match Disputes" />
            </Layout>
          </PrivateRoute>
        } />
        <Route path="/profile" element={
          <PrivateRoute>
            <Layout>
              <PlaceholderPage title="Station Profile" />
            </Layout>
          </PrivateRoute>
        } />
        <Route path="/staff-management" element={
          <PrivateRoute>
            <Layout>
              <PlaceholderPage title="Staff Management" />
            </Layout>
          </PrivateRoute>
        } />
        <Route path="/compliance" element={
          <PrivateRoute>
            <Layout>
              <PlaceholderPage title="Compliance Management" />
            </Layout>
          </PrivateRoute>
        } />
        <Route path="/playlog-management" element={
          <PrivateRoute>
            <Layout>
              <PlaceholderPage title="Playlog Management" />
            </Layout>
          </PrivateRoute>
        } />
        <Route path="/notifications" element={
          <PrivateRoute>
            <Layout>
              <PlaceholderPage title="Notifications" />
            </Layout>
          </PrivateRoute>
        } />
        <Route path="/help" element={
          <PrivateRoute>
            <Layout>
              <PlaceholderPage title="Help & Support" />
            </Layout>
          </PrivateRoute>
        } />
        <Route path="/radio-stream" element={
          <PrivateRoute>
            <Layout>
              <PlaceholderPage title="Radio Stream Monitor" />
            </Layout>
          </PrivateRoute>
        } />
        <Route path="/audio-stream" element={
          <PrivateRoute>
            <Layout>
              <PlaceholderPage title="Audio Stream Matcher" />
            </Layout>
          </PrivateRoute>
        } />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
