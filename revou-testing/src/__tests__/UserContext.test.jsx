// src/UserContext.test.js
import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { useUser } from '../UserContext';
import { UserProvider } from '../UserContext';

describe('UserContext', () => {
  it('provides user, login, and logout in the context', () => {
    const TestComponent = () => {
      const { user, login, logout } = useUser();
      return (
        <>
          <div data-testid="user">{user ? `User: ${user.name}` : 'No User'}</div>
          <button data-testid="login-btn" onClick={() => login({ name: 'testUser' })}>
            Login
          </button>
          <button data-testid="logout-btn" onClick={logout}>
            Logout
          </button>
        </>
      );
    };

    render(
      <UserProvider>
        <TestComponent />
      </UserProvider>
    );

    // Initial state: No user
    expect(screen.getByTestId('user')).toHaveTextContent('No User');

    // Login
    act(() => {
      screen.getByTestId('login-btn').click();
    });

    // Verify user state after login
    expect(screen.getByTestId('user')).toHaveTextContent('User: testUser');

    // Logout
    act(() => {
      screen.getByTestId('logout-btn').click();
    });

    // Verify user state after logout
    expect(screen.getByTestId('user')).toHaveTextContent('No User');
  });

  it('throws an error when useUser is not used within UserProvider', () => {
    const TestComponent = () => {
      try {
        return useUser();
      } catch (error) {
        return <div data-testid="error">{error.message}</div>;
      }
    };

    render(<TestComponent />);
    expect(screen.getByTestId('error')).toHaveTextContent('useUser must be used within a UserProvider');
  });
});
