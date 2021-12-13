import React from "react";
import { screen, render, cleanup, fireEvent } from '@testing-library/react'
import { Digit } from "./Digit";
import "@testing-library/jest-dom/extend-expect";
import { OutputScreen } from "./OutputScreen";

it('should render output screen', ()=>{
    render(<OutputScreen calculatingValue='2+4'/>);
    expect(screen.getByText('2+4')).toBeInTheDocument();
})