import { createContext, FC } from "react";
import React from "react";

export interface ICalcStoreContext {
  tileTiles: string[][];
  finalOutput: number;
  mode: string;
  setFinalOutput: (value: number) => void;
  setMode: (isSwitchChecked: boolean) => void;
}

export interface IRootStoreContext {
  calcStore: ICalcStoreContext;
}

export const StoreContext = createContext<IRootStoreContext>(
  {} as IRootStoreContext
);

export interface StoreProviderProps {
  children: any;
  store: IRootStoreContext;
}

const StoreProvider: FC<StoreProviderProps> = (props) => {
  return (
    <StoreContext.Provider value={props.store}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
