import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FrontendRouteData from './FrontendRouteData';

const Navbar = lazy(() => import('../components/navbar/Navbar'));

const NavigationRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar>
        <Routes>
          {FrontendRouteData.map((route, index) => (
            <Route element={route.element} key={index} path={route.path} />
          ))}
        </Routes>
      </Navbar>
    </BrowserRouter>
  );
};

export default NavigationRoutes;
