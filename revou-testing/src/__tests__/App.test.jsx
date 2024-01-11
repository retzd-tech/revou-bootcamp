// src/App.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import UserDashboard from "../UserDashboard";
import { UserProvider, useUser } from "../UserContext";
import UserData from "../User.json";

// Mock UserProvider to avoid dependency on the actual implementation
jest.mock("../UserContext", () => ({
  useUser: jest.fn(),
  UserProvider: ({ children }) => <div>{children}</div>,
}));

describe("App", () => {
  it("renders UserDashboard inside UserProvider", async () => {
    useUser.mockReturnValue({ user: UserData });
    
    render(<App />);
    
    const userDashboard = await screen.findByTestId("user-dashboard-component");
    expect(userDashboard).toBeInTheDocument();
  });
});
