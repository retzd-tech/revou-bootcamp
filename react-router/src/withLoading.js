// withLoading.js
import React, { useState } from 'react';

const withLoading = (WrappedComponent) => {
  return (props) => {
    const [loading, setLoading] = useState(true);

    // Simulate an asynchronous operation with setTimeout
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating a 2-second loading time

    return loading ? <p>Loading...</p> : <WrappedComponent {...props} />;
  };
};

export default withLoading;
