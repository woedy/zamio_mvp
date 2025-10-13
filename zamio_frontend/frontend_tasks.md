# Frontend Tasks: Improving zamio_frontend Based on zamio_frontend Copy

## Purpose
This document outlines a structured task list to evolve `zamio_frontend` from its current basic demo state to a production-ready application, drawing inspiration from the mature architecture and features in `zamio_frontend copy`. Tasks are organized by user stories and epics, with clear acceptance criteria to ensure each delivers tangible value. Prioritization focuses on foundational improvements first, followed by core features, and then enhancements.

## Guiding Principles
- **User-Centric**: Every task starts with a user story (As a [user], I want [feature] so that [benefit]).
- **Acceptance Criteria**: Each task includes verifiable criteria for completion.
- **Incremental Progress**: Build in phases to avoid overwhelming changes—start with architecture, then features.
- **Leverage Copy Folder**: Reference components, pages, and patterns from `zamio_frontend copy` as a library.
- **Quality Focus**: Include error handling, loading states, and responsive design where relevant.

## Epics and Tasks

### Epic 1: Architecture and Setup (Foundation)
**Goal**: Establish a modular, scalable structure to support advanced features.

- [x] **1. Task: Modularize Project Structure**
   - **User Story**: As a developer, I want a clear folder structure so that code is organized and maintainable.
   - **Description**: Refactor the flat `src/` into subdirectories (e.g., `components/`, `pages/`, `contexts/`, `hooks/`, `services/`, `utils/`, `lib/`). Move existing pages and create placeholders for new ones.
   - **Acceptance Criteria**:
     - `src/` has subfolders matching `zamio_frontend copy`.
     - Existing `App.tsx`, `main.tsx`, and pages are relocated without breaking functionality.
     - New folders are created with initial files (e.g., `lib/api.ts` for API client).

- [ ] **2. Task: Implement Proper Routing with React Router**
   - **User Story**: As a user, I want seamless navigation between pages so that I can access features intuitively.
   - **Description**: Replace URL query-based routing (`?p=landing`) with React Router v6, including public/private route guards for authentication.
   - **Acceptance Criteria**:
     - Routes are defined in a central file (e.g., `src/lib/router.tsx`).
     - Private routes redirect to `/signin` if unauthenticated.
     - Existing pages (Landing, Auth, Dashboard) work with new routing; no query params needed.

- [ ] **3. Task: Set Up Centralized API Client**
   - **User Story**: As a developer, I want a single API client so that API calls are consistent and easy to manage.
   - **Description**: Create `src/lib/api.ts` with Axios, including request interceptors for auth tokens (e.g., attaching `Authorization: Token <token>`).
   - **Acceptance Criteria**:
     - API client handles token attachment and 401 errors gracefully.
     - Basic endpoints (e.g., for profile or dashboard data) are wired and testable.
     - No hardcoded URLs in components.

### Epic 2: Authentication and User Management
**Goal**: Enable secure, user-friendly auth flows based on copy folder patterns.

- [ ] **4. Task: Enhance Authentication Pages**
   - **User Story**: As an artist, I want to sign up, log in, and recover my password so that I can securely access my account.
   - **Description**: Expand `Auth` page into dedicated sign-in, sign-up, and password reset pages with validation and error handling.
   - **Acceptance Criteria**:
     - Sign-up form collects name, email, phone, password with client-side validation.
     - Login redirects to dashboard on success; handles errors with toasts.
     - Password reset flow sends email and allows reset; integrates with API.
     - Pages use skeletons for loading and retry buttons for errors.

- [ ] **5. Task: Implement User Session Management**
   - **User Story**: As an artist, I want my session to persist and handle expiry so that I don't lose access unexpectedly.
   - **Description**: Use React Context for global auth state; fetch user profile on app load and handle token expiry (401 redirects to sign-in).
   - **Acceptance Criteria**:
     - Context provides `isAuthenticated`, `user` data across the app.
     - Token is stored minimally (e.g., localStorage); expired tokens trigger redirect.
     - Profile data (e.g., `artist_id`) is derived server-side and cached.

### Epic 3: Core Features (Dashboard and Music Management)
**Goal**: Build key pages for artist workflows, starting with essentials.

- [ ] **6. Task: Build Comprehensive Dashboard**
   - **User Story**: As an artist, I want a dashboard showing my plays, earnings, and key metrics so that I can track my success at a glance.
   - **Description**: Create a dashboard page with widgets for plays, royalties, and recent activity, pulling from API.
   - **Acceptance Criteria**:
     - Displays wallet balance, sources (radio, streaming), and charts for earnings over time.
     - Uses Ghana-specific formatting (e.g., GHS currency).
     - Includes loading skeletons, error states, and empty states if no data.

- [ ] **7. Task: Implement Music Upload and Management**
   - **User Story**: As an artist, I want to upload tracks, manage metadata, and view upload status so that I can register my music for royalties.
   - **Description**: Add pages for uploading tracks (audio + metadata), managing songs (list with filters), and viewing fingerprint/processing status.
   - **Acceptance Criteria**:
     - Upload form handles file selection, metadata input, and progress bars.
     - Song manager lists tracks with search, sort, and pagination.
     - Fingerprint status (processing/ready) is displayed; integrates with backend API.

### Epic 4: Analytics and Payments
**Goal**: Provide insights and financial tools for artists.

- [ ] **8. Task: Add Analytics Pages**
   - **User Story**: As an artist, I want charts for airplay, top songs, and station breakdowns so that I can understand my audience.
   - **Description**: Create analytics pages with interactive charts (e.g., plays over time, airplay map) using libraries like Recharts.
   - **Acceptance Criteria**:
     - Charts load from API with date range filters.
     - Includes empty states and error handling.
     - Responsive design for mobile.

- [ ] **9. Task: Implement Royalty and Payment Features**
   - **User Story**: As an artist, I want to view my wallet, request withdrawals, and see payment history so that I can manage my earnings.
   - **Description**: Build wallet dashboard, withdrawal form (MoMo integration), and payment history table.
   - **Acceptance Criteria**:
     - Wallet shows balance, sources, and breakdown with GHS formatting.
     - Withdrawal form validates amount, network, and KYC status; shows fees.
     - Payment history lists with statuses and pagination.

### Epic 5: UI/UX Enhancements and Polish
**Goal**: Improve usability, especially for African networks (e.g., offline resilience).

- [ ] **10. Task: Add Loading, Error, and Empty States**
    - **User Story**: As a user, I want clear feedback during loads and errors so that I know what's happening.
    - **Description**: Standardize skeletons, toasts, and retry mechanisms across pages.
    - **Acceptance Criteria**:
      - Long loads (>300ms) show skeletons.
      - Errors display toasts with retry options.
      - Empty states have helpful messages and illustrations.

- [ ] **11. Task: Ensure Responsive and Accessible Design**
    - **User Story**: As a mobile user, I want the app to work well on my device so that I can use it anywhere.
    - **Description**: Audit and fix responsive issues; add accessibility features (labels, keyboard nav).
    - **Acceptance Criteria**:
      - All key pages are mobile-friendly.
      - Forms have proper labels and ARIA attributes.
      - Passes basic accessibility checks.

### Epic 6: Quality, Testing, and Deployment
**Goal**: Make the app reliable and deployable.

- [ ] **12. Task: Set Up Testing Framework**
    - **User Story**: As a developer, I want tests so that I can catch issues early.
    - **Description**: Integrate Vitest for unit tests and add basic coverage for components.
    - **Acceptance Criteria**:
      - Key components have unit tests.
      - Tests run in CI or locally without errors.

- [ ] **13. Task: Add Containerization and DevOps**
    - **User Story**: As a developer, I want easy deployment so that I can share the app quickly.
    - **Description**: Add Dockerfile and docker-compose.yml for local and staging environments.
    - **Acceptance Criteria**:
      - App runs in Docker with a single command.
      - Supports multiple environments (dev, staging).

## Next Steps
- **Prioritization**: Start with Epic 1 (Architecture) to build a strong foundation, then move to Epics 2-3 for core value.
- **Tracking**: Update this document as tasks are completed (e.g., mark with [x] or notes).
- **Resources**: Reference `zamio_frontend copy/src/` for components and patterns; use its docs for API contracts.
- **Milestones**: Aim to complete 1-2 tasks per epic before full implementation.

This task list ensures we build user-valued features with clear success metrics, transforming the basic demo into a robust artist platform.
