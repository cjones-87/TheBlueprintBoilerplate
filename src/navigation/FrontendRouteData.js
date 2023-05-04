import React, { lazy } from 'react';

const LandingPage = lazy(() => import('../views/landing/LandingPage.jsx'));
const Login = lazy(() => import('../views/authentication/Login.jsx'));
const Registration = lazy(() =>
  import('../views/authentication/Registration.jsx')
);

const FrontendRouteData = [
  { element: <LandingPage />, path: '/' },
  { element: <Login />, path: '/login' },
  { element: <Registration />, path: '/registration' },
];

export default FrontendRouteData;
