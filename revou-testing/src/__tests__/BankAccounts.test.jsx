import React from 'react';
import { render, screen } from '@testing-library/react';

import { UserProvider } from '../UserContext';
import BankAccounts from '../BankAccounts';
import UserData from "../User.json";

test('renders bank accounts component', () => {
  render(
    <UserProvider>
      <BankAccounts user={UserData} />
    </UserProvider>
  );

  expect(screen.getByText("Balance: $1000")).toBeInTheDocument();
});
