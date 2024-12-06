import React, { Suspense, lazy } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';

// Lazy load components
const Hero = lazy(() => import('./components/Hero'));
const EcoStats = lazy(() => import('./components/EcoStats'));
const Projects = lazy(() => import('./components/Projects'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center py-16">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          <Hero />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <EcoStats />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <Projects />
        </Suspense>

        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-gray-400">© 2024 EcoTech Solutions. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </ErrorBoundary>
    </div>
  );
}

export default App;
