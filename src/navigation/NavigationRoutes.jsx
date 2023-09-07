import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const LandingPage = lazy(() => import('../views/landing/LandingPage.jsx'));
const Login = lazy(() => import('../views/authentication/Login.jsx'));
const Registration = lazy(() =>
  import('../views/authentication/Registration.jsx')
);

const NavigationRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/registration' element={<Registration />} />
    </Routes>
  );
};

export default NavigationRoutes;
