import React from "react";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import { MemoryRouter } from "react-router-dom";
import ProductList from "./ProductList";

jest.mock("axios");

describe("ProductList", () => {
  beforeEach(() => {
    axios.get = jest.fn().mockResolvedValueOnce({
      data: {
        categories: ["Category 1", "Category 2"],
        items: [
          {
            id: "1",
            title: "Item 1",
            price: 10,
          },
          {
            id: "2",
            title: "Item 2",
            price: 20,
          },
        ],
      },
    });
  });

  it("Should match snapshot", () => {
    const { container } = render(
      <MemoryRouter>
        <ProductList />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  it("Should display breadcrumbs", async () => {
    render(
      <MemoryRouter>
        <ProductList />
      </MemoryRouter>
    );
    expect(await screen.findByText("Category 1")).toBeInTheDocument();
    expect(await screen.findByText("Category 2")).toBeInTheDocument();
  });

  it("Should display list items", async () => {
    render(
      <MemoryRouter>
        <ProductList />
      </MemoryRouter>
    );
    expect(await screen.findByText("Item 1")).toBeInTheDocument();
    expect(await screen.findByText("Item 2")).toBeInTheDocument();
  });

  it("Should display 'NotFound' component when there are no items", async () => {
    axios.get = jest.fn().mockResolvedValueOnce({
      data: {
        categories: ["Category 1", "Category 2"],
        items: [],
      },
    });

    render(
      <MemoryRouter>
        <ProductList />
      </MemoryRouter>
    );
    expect(await screen.findByText("Oops, lo sentimos...")).toBeInTheDocument();
  });
});