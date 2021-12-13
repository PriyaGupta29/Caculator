import React from "react";
import ReactDOM from "react-dom";
import { Calculator } from "./components/Calculator";
import { Store1 } from "./store/calcStore";
import GlobalStore from "./store/GlobalStore";

const Main = () => {
  const calcStore = new Store1();

  const rootStore = {
    calcStore,
  };
  return (
    <GlobalStore store={rootStore}>
      <Calculator />
    </GlobalStore>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
