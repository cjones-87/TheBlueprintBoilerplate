import React, { lazy } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './app.jsx';

const root = document.getElementById('root');

createRoot(root).render(
  <div>
    <App />
  </div>
);
