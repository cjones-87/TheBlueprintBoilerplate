import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import LightDarkModeContext from './misc/context/LightDarkModeContext';
import store from './store';
import './index.css';
import App from './app.jsx';

const root = document.getElementById('root');

createRoot(root).render(
  <Provider store={store}>
    <LightDarkModeContext>
      <App />
    </LightDarkModeContext>
  </Provider>
);
