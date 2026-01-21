import { render, screen } from "@testing-library/react";
import RegisterForm from "./RegisterForm";
import React from "react";
import "@testing-library/jest-dom/extend-expect";

describe("Basic Rendering", () => {
  const onRegister = jest.fn();
  const authMode = "{buyer}";

  test("should display form fields", () => {
    const { getByTestId } = render(
      <RegisterForm onRegister={onRegister} authMode={authMode} />
    );

    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Phone")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Confirm Password")).toBeInTheDocument();
    expect(getByTestId("agreeTermsCheckbox")).toBeInTheDocument();
    expect(getByTestId("agreeTermsLabel")).toBeInTheDocument();
    expect(getByTestId("submitButton")).toBeInTheDocument();
  });
});
