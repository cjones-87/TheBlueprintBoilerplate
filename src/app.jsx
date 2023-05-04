import React, { Suspense, lazy } from 'react';
import NavigationRoutes from './navigation/NavigationRoutes';
import './index.css';

const Spinner = lazy(() => import('./misc/loading/Spinner.jsx'));

export const Loading = () => (
  <div id="loadingSpinner">
    <Spinner />
  </div>
);

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <NavigationRoutes />
    </Suspense>
  );
};

export default App;
