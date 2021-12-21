import React from "react";
import {
  render as rtlRender,
  fireEvent,
  cleanup,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Calculator } from "./Calculator";
import GlobalStore from "../store/GlobalStore";

const calcStore = {
  setFinalOutput: jest.fn(),
  finalOuptut: 87,
  mode: "light",
  tileTiles: [
    ["C", "D", "%", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ],
};

const stores = {
  calcStore,
};

afterEach(cleanup);

function render(ui: any, { ...options } = {}) {
  function Wrapper(props: any) {
    return <GlobalStore store={stores} {...props} />;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

describe("calculator", () => {
  it("should show output screen", () => {
    const { getByTestId } = render(<Calculator />);
    expect(getByTestId("output-section")).toBeInTheDocument();
  });

  it("should show digits and operations tiles", () => {
    const { getByText, queryByText } = render(<Calculator />);
    const digit = 1;
    expect(queryByText("1")).toBeInTheDocument();
    expect(getByText("+")).toBeInTheDocument();
  });

  it("should be able to click on digits", () => {
    const { getByText } = render(<Calculator />);
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("5"));
    expect(getByText("25")).toBeInTheDocument();
  });

  it("should replace last operator if clicked on any two operators simultaneously", () => {
    const { getByText, queryByText } = render(<Calculator />);
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("5"));
    fireEvent.click(getByText("+"));
    fireEvent.click(getByText("-"));
    expect(queryByText("25+")).not.toBeInTheDocument();
    expect(queryByText("25+-")).not.toBeInTheDocument();
    expect(getByText("25-")).toBeInTheDocument();
  });

  it("should be able to perform calculation", () => {
    const { getByText } = render(<Calculator />);
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("5"));
    fireEvent.click(getByText("+"));
    fireEvent.click(getByText("5"));
    fireEvent.click(getByText("="));
    expect(getByText("30")).toBeInTheDocument();
  });

  it("should be able to perform percentage calculation", () => {
    const { getByText } = render(<Calculator />);
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("%"));
    fireEvent.click(getByText("="));
    expect(getByText("0.02")).toBeInTheDocument();
  });

  it("should clear values when clicked on C", () => {
    const { getByText, queryByText } = render(<Calculator />);
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("5"));
    expect(getByText("25")).toBeInTheDocument();
    fireEvent.click(getByText("C"));
    expect(queryByText("25")).not.toBeInTheDocument();
  });

  it("should delete last value when clicked on D", () => {
    const { getByText, queryByText } = render(<Calculator />);
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("5"));
    expect(getByText("25")).toBeInTheDocument();
    fireEvent.click(getByText("D"));
    expect(queryByText("25")).not.toBeInTheDocument();
    fireEvent.click(getByText("7"));
    expect(queryByText("27")).toBeInTheDocument();
  });
});
