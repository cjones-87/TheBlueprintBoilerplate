import useUser from '../../misc/customHooks/useUser';

const LandingPage = () => {
  const { user } = useUser();

  return (
    <div className='center' id='landingPage'>
      <h1>CJ's Blueprint Boilerplate</h1>
      {user ? <h2>Welcome {user.username}!</h2> : <h2>Welcome, Guest!</h2>}
    </div>
  );
};

export default LandingPage;
