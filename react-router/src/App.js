// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ParentLayout from "./ParentLayout";
import Home from "./Home";
import PrimaryAccount from "./PrimaryAccount";
import SecondaryAccount from "./SecondaryAccount";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ParentLayout />}>
          <Route index element={<Home />} />
          <Route path="primary-account" element={<PrimaryAccount />} />
          <Route path="additional-account" element={<SecondaryAccount />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
