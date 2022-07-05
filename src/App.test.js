import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App.js";

test("renders cards", () => {
  render(<App />);
  const linkElement = screen.getByText(/News About/i);
  expect(linkElement).toBeInTheDocument();
});
