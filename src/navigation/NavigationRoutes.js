import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Navbar = lazy(() => import('../components/navbar/Navbar'));
const LandingPage = lazy(() => import('../views/landing/LandingPage.jsx'));
const Login = lazy(() => import('../views/authentication/Login.jsx'));
const Registration = lazy(() =>
  import('../views/authentication/Registration.jsx')
);

const NavigationRoutes = (props) => {
  const user = props.user;

  return (
    <BrowserRouter>
      <Navbar>
        <Routes>
          <>
            <Route path="/" element={<LandingPage user={user} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
          </>
        </Routes>
      </Navbar>
    </BrowserRouter>
  );
};

export default NavigationRoutes;
