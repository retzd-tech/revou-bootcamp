// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ParentLayout from './ParentLayout';
import Home from './Home';
import About from './About';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ParentLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
