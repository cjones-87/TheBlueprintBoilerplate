import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useUser from './misc/customHooks/useUser';
import useWindowDimensions from './misc/customHooks/useWindowDimensions';
import useTheme from './misc/customHooks/useTheme';
import DarkModeToggle from './components/navbar/DarkModeToggle';
import NavigationRoutes from './navigation/NavigationRoutes';
import axios from 'axios';
import './index.css';

const Spinner = lazy(() => import('./misc/loading/Spinner.jsx'));
const Navbar = lazy(() => import('./components/navbar/Navbar'));
const NavbarLogo = lazy(() => import('./components/navbar/NavbarLogo'));

export const Loading = () => (
  <div id='loadingSpinner'>
    <Spinner />
  </div>
);

const App = () => {
  const { user } = useUser();
  const { darkMode } = useTheme();
  const { height, width } = useWindowDimensions();

  const end = <DarkModeToggle />;

  const navLinks = user
    ? [
        { content: 'Home', href: '/' },
        { content: 'Logout', href: '/' },
      ]
    : [
        { content: 'Login', href: '/login' },
        { content: 'Sign Up', href: '/registration' },
      ];

  const start = (
    <NavLink to='/'>
      <Suspense fallback={<Spinner />}>
        <div id='navbarLogoContainer'>
          <NavbarLogo />
        </div>
      </Suspense>
    </NavLink>
  );

  return (
    <div
      style={{
        background: darkMode
          ? 'radial-gradient(rgba(75, 0, 130, 1), rgba(163, 0, 130, 1))'
          : 'radial-gradient(rgba(163, 0, 130, 1), rgba(75, 0, 130, 1))',
        height,
      }}
    >
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Navbar end={end} navLinks={navLinks} start={start} />
          <NavigationRoutes />
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
