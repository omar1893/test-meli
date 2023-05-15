import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";

describe("Home", () => {
  it("Should match snapshot", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});