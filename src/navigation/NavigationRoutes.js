import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FrontendRouteData from './FrontendRouteData';

const NavigationRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {FrontendRouteData.map((route, index) => (
          <Route element={route.element} key={index} path={route.path} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default NavigationRoutes;
