import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import App from './app.jsx';

const root = document.getElementById('root');

createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>
);
