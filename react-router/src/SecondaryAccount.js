// About.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import withLoading from './withLoading';

const SecondaryAccount = () => {
  return (
    <div>
      <h2>Secondary Account</h2>
      <p>Balance : 3000 USD</p>
      <Outlet />
    </div>
  );
};

export default withLoading(SecondaryAccount);