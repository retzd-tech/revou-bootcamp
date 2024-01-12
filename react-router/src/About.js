// About.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import withLoading from './withLoading';

const About = () => {
  return (
    <div>
      <h2>About</h2>
      <p>Learn more about our company.</p>
      <Outlet />
    </div>
  );
};

export default withLoading(About);