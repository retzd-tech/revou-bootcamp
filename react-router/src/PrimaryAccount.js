// About.js
import React from "react";
import { Outlet } from "react-router-dom";
import withLoading from "./withLoading";

const PrimaryAccount = () => {
  return (
    <div>
      <h2>Primary Account</h2>
      <p>Balance : 10000 USD</p>
    </div>
  );
};

export default withLoading(PrimaryAccount);
