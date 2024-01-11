import React from "react";

import { useUser } from "./UserContext";
import BankAccounts from "./BankAccounts";
import Header from "./Header";
import LoginForm from "./LoginForm";

const UserDashboard = () => {
  const { user } = useUser();
  return user ? renderDashboard(user) : renderLoginForm();
};

const renderDashboard = (user) => {
  return (
    <div data-testid="user-dashboard-component">
      <Header />
      <BankAccounts user={user} />
    </div>
  );
};

const renderLoginForm = () => {
  return <LoginForm />;
};

export default UserDashboard;
