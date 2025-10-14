# Zamio Stations Onboarding Implementation

## Overview
Implementation of the multi-step station onboarding system for zamio_stations based on the proven structure from zamio_frontend. **DEMO-ONLY implementation with NO backend connections** - all steps will use mock data and demo states only.

## 🎯 Task Checklist

### Phase 1: Core Onboarding Infrastructure ✅ COMPLETED
- [x] Create `src/components/onboarding/OnboardingWizard.tsx` component
- [x] Set up onboarding routing in `src/lib/router.tsx` (`/onboarding` route)
- [x] Create main onboarding page structure
- [x] Add navigation integration from signup flow

### Phase 2: Step Components Creation
- [x] **Welcome Step** (`steps/WelcomeStep.tsx`)
  - [x] Welcome message and platform introduction
  - [x] Station setup overview
  - [x] "What's Next" roadmap

- [x] **Profile Step** (`steps/ProfileStep.tsx`)
  - [x] Station profile form (name, type, location, coverage)
  - [x] Station logo/photo upload (demo)
  - [x] License and compliance information
  - [x] Contact information

- [x] **Stream Setup Step** (`steps/StreamSetupStep.tsx`)
  - [x] Stream link configuration
  - [x] Audio monitoring setup
  - [x] Technical requirements
  - [x] Testing tools

- [x] **Staff Management Step** (`steps/StaffStep.tsx`)
  - [x] Staff member addition form
  - [x] Role assignment (Manager, Reporter, Admin)
  - [x] Permission management
  - [x] Contact information

- [x] **Compliance Step** (`steps/ComplianceStep.tsx`)
  - [x] License verification
  - [x] Regulatory compliance forms
  - [x] Documentation upload
  - [x] Compliance checklist

- [ ] **Payment Setup Step** (`steps/PaymentStep.tsx`)
  - [ ] Payment method selection (demo)
  - [ ] Banking information setup
  - [ ] Mobile money integration (Ghana-specific)
  - [ ] Currency and payout preferences

### Phase 3: Enhanced Components
- [ ] **StationOnboardingContext.tsx** - State management context
- [ ] **StationOnboardingProgress.tsx** - Progress visualization component
- [ ] **useStationOnboarding.ts** - Custom hook for onboarding logic
- [ ] **onboarding.ts** - Utility functions and route mapping

### Phase 4: Integration & Polish
- [ ] **StationOnboarding.tsx** - Main orchestrator component
- [ ] Integration with existing signup flow
- [ ] Navigation back to main app after completion
- [ ] Responsive design for mobile devices
- [ ] Consistent styling with existing zamio_stations theme

### Phase 5: Demo Data & Features
- [ ] Mock station data for step progression
- [ ] Demo completion states for each step
- [ ] Sample stream links and configurations
- [ ] Demo staff members and roles

## 📋 Implementation Notes

### Project Structure Adaptation
- **Base**: Use zamio_frontend onboarding as foundation
- **Adaptation**: Modify for station-specific requirements
- **Integration**: Work with existing zamio_stations architecture
- **Styling**: Match existing Tailwind/styling patterns

### Station-Specific Features
- **Stream Links**: Audio stream configuration and monitoring
- **Compliance**: Ghana broadcasting regulations and licensing
- **Staff Roles**: Station manager, reporters, compliance officers
- **Payment**: Station revenue collection and payouts
- **Monitoring**: Airplay tracking and reporting setup

### Step Completion Logic
- **Required steps**: Profile, Stream Setup (must complete)
- **Optional steps**: Staff, Compliance, Payment (can skip)
- **Auto-progression**: Move to next incomplete required step
- **Manual navigation**: Users can jump between completed steps

### Demo Flow
```
Sign Up → Email Verification → Onboarding (Welcome → Profile → Stream → Staff → Compliance → Payment) → Dashboard
```

## 🚀 Success Criteria

- [ ] Complete onboarding flow works end-to-end
- [ ] All 6 steps are functional as demo pages
- [ ] Step progression and navigation works
- [ ] Responsive design on all screen sizes
- [ ] Consistent styling with existing zamio_stations theme
- [ ] No console errors or broken functionality

## 📁 Files to Create/Modify

### New Files
- `src/components/onboarding/OnboardingWizard.tsx`
- `src/contexts/StationOnboardingContext.tsx`
- `src/hooks/useStationOnboarding.ts`
- `src/utils/onboarding.ts`
- `src/components/onboarding/StationOnboardingProgress.tsx`
- `src/pages/Authentication/Onboarding/`
- `src/pages/Authentication/Onboarding/steps/`
- `src/pages/Authentication/Onboarding/steps/WelcomeStep.tsx`
- `src/pages/Authentication/Onboarding/steps/ProfileStep.tsx`
- `src/pages/Authentication/Onboarding/steps/StreamSetupStep.tsx`
- `src/pages/Authentication/Onboarding/steps/StaffStep.tsx`
- `src/pages/Authentication/Onboarding/steps/ComplianceStep.tsx`
- `src/pages/Authentication/Onboarding/steps/PaymentStep.tsx`
- `src/pages/Authentication/StationOnboarding.tsx`

### Modified Files
- `src/lib/router.tsx` (add onboarding route)
- `src/pages/Authentication/SignUp.tsx` (add onboarding redirect)
- `src/pages/Authentication/EmailVerification.tsx` (add onboarding redirect)

## 🎨 Styling Requirements

### Project Theme Integration
- **Styling**: Use direct Tailwind classes matching zamio_stations patterns
  - Dark backgrounds: `bg-slate-950`, `bg-slate-900/60`
  - Text colors: `text-white`, `text-slate-200`, `text-slate-300`, `text-slate-400`
  - Accent colors: `indigo-500`, `indigo-400`, `indigo-300`
  - Borders: `border-white/10`, `border-white/20`
  - Effects: `backdrop-blur`, `shadow-2xl`
- **Icons**: Lucide React icons (Radio, Users, Settings, CheckCircle, etc.)
- **Layout**: Container-based responsive design
- **No theme context** - use direct class implementations

### Ghana-Specific Features
- Mobile money integration (MTN, Vodafone, AirtelTigo)
- Broadcasting license verification
- Local regulatory compliance messaging
- Regional station management features

## 🔧 Technical Approach

### Component Architecture
1. **OnboardingWizard**: Generic wizard component (reusable)
2. **StationOnboarding**: Main orchestrator with state management
3. **Step Components**: Individual step implementations
4. **Context/Hooks**: State management and business logic
5. **Utils**: Route mapping and helper functions

### State Management Strategy
- **Context**: StationOnboardingContext for global state
- **Local State**: Individual steps manage their own form data
- **Persistence**: localStorage for progress (demo mode)
- **Validation**: Step-level validation before progression

### Integration Points
- **Router**: Add `/onboarding` route with step routing
- **Auth Flow**: Redirect to onboarding after email verification
- **Dashboard**: Onboarding completion navigates to dashboard
- **Navigation**: Breadcrumbs and progress indicators
