import { render, screen } from "@testing-library/react";
import Search from "./Search.js";

test("Check if Search Section have correct className", () => {
  render(<Search />);
  const SearchSectionTestid = screen.getByTestId("search");
  expect(SearchSectionTestid).toBeInTheDocument();

  //testing for className
  expect(SearchSectionTestid).toHaveClass("search-section");
});

test("Check Search Button Text", () => {
  render(<Search />);
  const SearchElement = screen.getByText(/Search/i);

  expect(SearchElement).toBeInTheDocument();
});

test("Check Search Placeholder", () => {
  render(<Search />);
  const PlaceholderElement = screen.getByPlaceholderText(/e.g. sport/i);

  expect(PlaceholderElement).toBeInTheDocument();
});
