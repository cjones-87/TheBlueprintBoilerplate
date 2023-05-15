import React, { Suspense, lazy, useEffect, useState } from 'react';
import NavigationRoutes from './navigation/NavigationRoutes';
import axios from 'axios';
import './index.css';

const Spinner = lazy(() => import('./misc/loading/Spinner.jsx'));

export const Loading = () => (
  <div id="loadingSpinner">
    <Spinner />
  </div>
);

const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const addLoggedInUser = async () => {
      const token = localStorage.getItem('token');

      if (token) {
        const response = await axios.get('/api/users/me', {
          headers: {
            authorization: token,
          },
        });

        setUser(response.data);
      }
    };

    addLoggedInUser();
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <NavigationRoutes user={user} />
    </Suspense>
  );
};

export default App;
