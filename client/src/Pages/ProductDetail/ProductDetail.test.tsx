import React from "react";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./ProductDetail";

jest.mock("axios");

describe("ProductDetail", () => {
  beforeEach(() => {
    axios.get = jest.fn().mockResolvedValueOnce({
      data: {
        item: {
          id: "1",
          picture: "image-url",
          condition: "New",
          sold_quantity: 10,
          title: "Product Title",
          price: {
            amount: 99.99,
            currency: "USD",
            decimals: 0
          },
          description: "Product Description",
        },
      },
    });
  });

  it("Should match snapshot", async () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/items/1"]}>
        <Routes>
          <Route path="/items/:id" element={<ProductDetail />} />
        </Routes>
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  it("Should display product information", async () => {
    render(
      <MemoryRouter initialEntries={["/items/1"]}>
        <Routes>
          <Route path="/items/:id" element={<ProductDetail />} />
        </Routes>
      </MemoryRouter>
    );
    expect(await screen.findByText("Product Title")).toBeInTheDocument();
    expect(await screen.findByText("99,99 US$")).toBeInTheDocument();
    expect(await screen.findByText("Product Description")).toBeInTheDocument();
  });
});
