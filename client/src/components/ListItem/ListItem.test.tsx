import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ListItem from "./ListItem";
import { useNavigate } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("ListItem", () => {

  const author = {
    name: 'Omar',
    lastname: 'Lopez'
  }
  const item = {
    id: 1,
    picture: "item-picture.jpg",
    price: {
      amount: 100,
      currency: "USD",
      decimal: 0,
    },
    free_shipping: true,
    title: "Item Title",
    address: "Item Address",
    condition: 'new',
    sold_quantity: 100,
    description: ''
  };

  it("Should match snapshot", () => {
    const { container } = render(<ListItem item={item} author={author}/>);
    expect(container).toMatchSnapshot();
  });

  it("Should display item details correctly", () => {
    render(<ListItem item={item} author={author}/>);

    const priceElement = screen.getByText("100,00 US$");
    const titleElement = screen.getByText("Item Title");
    const addressElement = screen.getByText("Item Address");
    const shippingIconElement = screen.getByAltText("Free Shipping");

    expect(priceElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(addressElement).toBeInTheDocument();
    expect(shippingIconElement).toBeInTheDocument();
  });

  it("Should navigate to item details on click", () => {
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockImplementation(() => navigateMock);

    const { container } = render(<ListItem item={item} author={author}/>);

    const listItemElement = container.querySelector(".listItem") as Element;
    fireEvent.click(listItemElement)

    expect(navigateMock).toHaveBeenCalledWith("/items/1");
  });
});
