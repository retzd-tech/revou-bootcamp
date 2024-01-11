// src/LoginForm.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { useUser } from '../UserContext';
import LoginForm from '../LoginForm';

jest.mock("../UserContext", () => ({
    useUser: jest.fn(),
    UserProvider: ({ children }) => <div>{children}</div>,
  }));

describe('LoginForm', () => {
  it('calls useUser login function with the correct credentials on button click', () => {
    // Mock the useUser hook to provide a login function
    const mockLogin = jest.fn();
    useUser.mockReturnValue({ login: mockLogin });

    render(<LoginForm />);

    // Fill in the form inputs
    userEvent.type(screen.getByLabelText("Username:"), 'testUser');
    userEvent.type(screen.getByLabelText("Password:"), 'testPassword');

    // Click the login button
    fireEvent.click(screen.getByText("Login"));

    // Verify that useUser's login function was called with the correct credentials
    expect(mockLogin).toHaveBeenCalledWith({ name: 'testUser', accounts: [{ id: 1, name: 'Savings', balance: 1000 }] });
  });

  it('displays an error message for invalid form submission', () => {
    render(<LoginForm />);

    // Click the login button without filling in the form
    fireEvent.click(screen.getByText("Login"));

    // Verify that an error message is displayed
    expect(screen.getByText("Invalid form")).toBeInTheDocument();
  });

  it('clears the error message when a valid form is submitted', () => {
    render(<LoginForm />);

    // Click the login button without filling in the form
    fireEvent.click(screen.getByText("Login"));

    // Verify that an error message is displayed
    expect(screen.getByText("Invalid form")).toBeInTheDocument();

    // Fill in the form inputs
    userEvent.type(screen.getByLabelText("Username:"), 'testUser');
    userEvent.type(screen.getByLabelText("Password:"), 'testPassword');

    // Click the login button
    fireEvent.click(screen.getByText("Login"));

    // Verify that the error message is no longer displayed
    expect(screen.queryByText("Invalid form")).toBeNull();
  });
});
