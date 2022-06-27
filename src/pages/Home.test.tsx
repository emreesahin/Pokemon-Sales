import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("Welcome Message", () => {
  render(<Home />);
  const welcomeElement = screen.getByText(/Welcome to the Pokemon Sales/i);
  expect(welcomeElement).toBeInTheDocument();
});
