import { makeAutoObservable } from "mobx";

export class Store1 {
  constructor() {
    makeAutoObservable(this);
  }

  tileTiles: string[][] = [['C', 'D', '%', '/'], ['7', '8', '9', '*'], ['4','5', '6', '-'], ['1', '2', '3', '+'], ['0', '.', '=']];
  finalOutput: number = 0;
  mode: string = 'light';

  public setFinalOutput = (output: number) => {
    this.finalOutput = output;
  };

  public setMode = (setMode: boolean) => {
    this.mode = setMode ? 'dark': 'light';
  }
}
