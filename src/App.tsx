import * as React from 'react';
import { HomePage } from './pages/HomePage/HomePage';
import { Test } from './pages/Test/Test';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/test"
          element={<Test num={12} text={'Test test test page'} />}
        />
      </Routes>
    </Router>
  );
};
