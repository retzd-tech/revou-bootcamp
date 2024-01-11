// src/BankAccounts.js
import React from "react";

const BankAccounts = ({ user }) => {
  return (
    <div>
      <div className="account-cards">
        {user.accounts.map((account) => (
          <div key={account.id} className="account-card">
            <h3>{account.name}</h3>
            <p>Balance: ${account.balance}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BankAccounts;
