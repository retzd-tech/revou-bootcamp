import React from "react";
import { render, screen } from "@testing-library/react";

import { UserProvider, useUser } from "../UserContext";
import UserDashboard from "../UserDashboard";
import UserData from "../User.json";

jest.mock("../UserContext", () => ({
  useUser: jest.fn(),
  UserProvider: ({ children }) => <div>{children}</div>,
}));

describe("UserDashboard", () => {
  it("renders dashboard when user is logged in", () => {
    useUser.mockReturnValue({ user: UserData });

    render(
      <UserProvider>
        <UserDashboard />
      </UserProvider>
    );

    expect(screen.getByText("Hello, user")).toBeInTheDocument();
    expect(screen.getByText("Savings")).toBeInTheDocument();
  });

  it("renders login form when user is not logged in", () => {
    useUser.mockReturnValue({ user: null });

    render(
      <UserProvider>
        <UserDashboard />
      </UserProvider>
    );

    expect(screen.getByText("Username:")).toBeInTheDocument();
    expect(screen.getByText("Password:")).toBeInTheDocument();
  });
});
