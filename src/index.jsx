import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import LightDarkModeContext from './misc/context/LightDarkModeContext';
import UserProvider from './misc/context/UserProvider';
import './index.css';
import App from './app.jsx';

const root = document.getElementById('root');

createRoot(root).render(
  <Provider store={store}>
    <LightDarkModeContext>
      <UserProvider>
        <App />
      </UserProvider>
    </LightDarkModeContext>
  </Provider>
);
