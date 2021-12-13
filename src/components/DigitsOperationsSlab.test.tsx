import React from "react";
import {
  render as rtlRender,
  fireEvent,
  cleanup,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DigitsOperationSlab from "./DigitsOperationsSlab";
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

test("should render slabs", () => {
  const props = {
    onClick: jest.fn(),
  };
  const { getByText } = render(<DigitsOperationSlab {...props} />);
  expect(getByText("1")).toBeInTheDocument();
  fireEvent.click(getByText("1"));
  expect(props.onClick).toHaveBeenCalled();
});
