/* eslint-disable testing-library/prefer-screen-queries */
// src/BankAccounts.test.js
import React from 'react';
import { render } from '@testing-library/react';
import { UserProvider } from './UserContext';
import BankAccounts from './BankAccounts';

test('renders bank accounts component', () => {
  const user = {
    name: 'John Doe',
    accounts: [
      { id: 1, name: 'Savings', balance: 1000 },
      { id: 2, name: 'Checking', balance: 500 },
    ],
  };

  const { getByText } = render(
    <UserProvider value={{ user }}>
      <BankAccounts />
    </UserProvider>
  );

  expect(getByText(/john doe/i)).toBeInTheDocument();
  expect(getByText(/savings/i)).toBeInTheDocument();
  expect(getByText(/checking/i)).toBeInTheDocument();
  expect(getByText(/balance: \$1000/i)).toBeInTheDocument();
  expect(getByText(/balance: \$500/i)).toBeInTheDocument();
});

// Add more tests for hooks and context as needed
