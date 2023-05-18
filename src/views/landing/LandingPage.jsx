import React from 'react';

const LandingPage = (props) => {
  const user = props.user;

  return (
    <div className="center" id="landingPage">
      <h1>CJ's Blueprint Boilerplate</h1>
      {user.id ? (
        <div>Welcome {user.username}!</div>
      ) : (
        <div>Welcome, Guest!</div>
      )}
    </div>
  );
};

export default LandingPage;
