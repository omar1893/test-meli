import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Searchbar from "./Searchbar";
import { useNavigate } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("Searchbar", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should match snapshot", () => {
    const { container } = render(<Searchbar />);
    expect(container).toMatchSnapshot();
  });

  it("Should navigate to search results on button click", () => {
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockImplementation(() => navigateMock);

    render(<Searchbar />);

    const searchInput = screen.getByPlaceholderText("Nunca dejes de buscar");
    const searchButton = screen.getByRole("button");

    fireEvent.change(searchInput, { target: { value: "example search" } });
    fireEvent.click(searchButton);

    expect(navigateMock).toHaveBeenCalledWith("/items?search=example search");
  });
});