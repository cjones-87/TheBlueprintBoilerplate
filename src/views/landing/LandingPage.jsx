import React from 'react';
import { useSelector } from 'react-redux';

const LandingPage = () => {
  const auth = useSelector((state) => state.authReducer);

  return (
    <div className="center">
      <h1>CJ's Blueprint Boilerplate</h1>
      {auth && auth.isAuthenticated ? (
        <div>Welcome User!</div>
      ) : (
        <div>Welcome!</div>
      )}
    </div>
  );
};

export default LandingPage;
