// ParentLayout.js
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const ParentLayout = () => {
  return (
    <div>
      <header>
        <h1>My App</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2024 My App</p>
      </footer>
    </div>
  );
};

export default ParentLayout;
