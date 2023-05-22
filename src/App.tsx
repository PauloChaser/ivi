import * as React from 'react';
import { HomePage } from './pages/HomePage/HomePage';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};
