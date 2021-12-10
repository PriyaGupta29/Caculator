import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import { OutputScreen } from "./OutputScreen";
import DigitsOperationSlab from "./DigitsOperationsSlab";
import { StoreContext } from "../store/GlobalStore";
import { solveEquation } from "../actions/performCalculation";
import { useObserver } from "mobx-react-lite";

export const Calculator = () => {
  const store = useContext(StoreContext);
  const { calcStore } = store;
  const [calculatingValue, setCalculatingValue] = React.useState("");

  const setResultValue = (value: number) => {
    calcStore.setFinalOutput(value);
  };

  const getLastValue = () => {
    return calculatingValue[calculatingValue.length - 1];
  };

  const isLastValuePercentile = () => {
    return getLastValue() === "%";
  };

  const onClick = (value: string) => {
    switch (value) {
      case "=":
        if (!isNaN(Number(getLastValue())) || isLastValuePercentile()) {
          const equation = calculatingValue.replace("%", "/100");
          const resolvedValue = solveEquation(equation);
          setResultValue(resolvedValue);
          setCalculatingValue(resolvedValue.toString());
        }
        break;
      case "C":
        setCalculatingValue("");
        setResultValue(0);
        break;
      case "D":
        setCalculatingValue(
          calculatingValue.substring(0, calculatingValue.length - 1)
        );
        setResultValue(0);
        break;
      default:
        if (isNaN(Number(value))) {
          if (isLastValuePercentile()) {
            setCalculatingValue(calculatingValue + value);
          } else {
            const wasLastStringOperator = isNaN(
              Number(calculatingValue.substring(calculatingValue.length - 1))
            );
            const inputString = wasLastStringOperator
              ? calculatingValue.substring(0, calculatingValue.length - 1) +
                value
              : calculatingValue + value;
            setCalculatingValue(inputString);
          }
        } else {
          if (calcStore.finalOutput) {
            setCalculatingValue(value);
            setResultValue(0);
            break;
          }
          if (isLastValuePercentile()) {
            setCalculatingValue(calculatingValue + "*" + value);
          } else {
            setCalculatingValue(calculatingValue + value);
          }
        }
        setResultValue(0);
    }
  };

  const renderCalculator = () => {
    return (
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <div
          className={`calculator-container ${
            calcStore.mode === "light" ? "lightMode" : "darkMode"
          }`}
        >
          <Grid item xs={12}>
            <OutputScreen calculatingValue={calculatingValue} />
          </Grid>
          <Grid item xs={12} sm={12}>
            <DigitsOperationSlab onClick={onClick} />
          </Grid>
        </div>
      </Grid>
    );
  };

  return useObserver(() => renderCalculator());
};
