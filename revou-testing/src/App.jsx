// src/App.js
import React from "react";
import { UserProvider } from "./UserContext";
import UserDashboard from "./UserDashboard";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <UserProvider>
        <UserDashboard />
      </UserProvider>
    </div>
  );
};

export default App;
