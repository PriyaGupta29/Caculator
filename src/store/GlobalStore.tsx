import { createContext, FC } from "react";
import React from 'react';
import { Store1 } from "./calcStore";

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
}

const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
    const calcStore = new Store1();

    const rootStore = {
        calcStore
    };

    return (
        <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
    );
};

export default StoreProvider;
