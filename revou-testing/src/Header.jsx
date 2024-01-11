import React from "react";
import { useUser } from "./UserContext";

const Header = () => {
  const { user, logout } = useUser();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
      <div className="header">
        <h2>Hello, {user.name}</h2>
      </div>
    </>
  );
};

export default Header;
