import React from "react";
import { useUser } from "./UserContext";

const Header = () => {
  const { user, logout } = useUser();

  return (
    <>
      <button className="logout-button" onClick={logout}>
        Logout
      </button>
      <div className="header">
        <h2>Hello, {user.name}</h2>
      </div>
    </>
  );
};

export default Header;
