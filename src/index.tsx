import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

document.addEventListener('DOMContentLoaded', function () {
  const app = document.querySelector('#app');

  if (!app) {
    return;
  }

  const root = createRoot(app);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});
