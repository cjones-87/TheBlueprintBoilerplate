import React from 'react';

const LandingPage = (props) => {
  const user = props.user;

  return (
    <div className="center" id="landingPage">
      <h1>CJ's Blueprint Boilerplate</h1>
      {user.id ? <h2>Welcome {user.username}!</h2> : <h2>Welcome, Guest!</h2>}
    </div>
  );
};

export default LandingPage;
