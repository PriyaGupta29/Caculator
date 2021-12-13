import React from "react";
import { screen, render } from '@testing-library/react'
import { Digit } from "./Digit";
import "@testing-library/jest-dom/extend-expect";

it("should render slabs", () => {
  render(<Digit title="1" onClick={jest.fn()} />);
  expect(screen.getByTestId("tile-component")).toBeInTheDocument();
});
