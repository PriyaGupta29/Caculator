import React from "react";
import {
  render as rtlRender,
  fireEvent,
  cleanup,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import GlobalStore from "../store/GlobalStore";
import ThemeSwitch from "./ThemeSwitch";

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

it("should render switch", () => {
  const { getByTestId } = render(<ThemeSwitch />);
  expect(getByTestId("switch")).toBeInTheDocument();
});
