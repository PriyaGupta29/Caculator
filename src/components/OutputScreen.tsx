import React, { useContext } from "react";
import "./main.css";
import { StoreContext } from "../store/GlobalStore";
import ThemeSwitch from "./ThemeSwitch";

interface OutputScreenProps {
  calculatingValue: string;
}

export const OutputScreen = (props: OutputScreenProps) => {
  const store = useContext(StoreContext);
  const { calcStore } = store;
  const { finalOutput } = calcStore || {};
  const doesResultContainDecimals =
    finalOutput?.toString().substring(finalOutput?.toString().indexOf("."))
      .length > 10;
  const output = doesResultContainDecimals
    ? finalOutput?.toFixed(10)
    : finalOutput;
  return (
    <div className="output-screen" data-testid="output-section">
      <ThemeSwitch />
      <div className="resultValue text-right">{output !== 0 ? output : ""}</div>
      <div className="inputString text-right">
        {Number(props.calculatingValue) !== Number(finalOutput)
          ? props.calculatingValue
          : ""}
      </div>
    </div>
  );
};
