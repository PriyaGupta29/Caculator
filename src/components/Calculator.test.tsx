import React from "react";
import { screen, render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import { Calculator } from "./Calculator";

describe('calculator', ()=>{
    render(<Calculator />);
    it('should show output screen', ()=>{
        expect(screen.getByTestId('output-section')).toBeInTheDocument();
    });

    it('should show digits and operations tiles', ()=>{
        expect(screen.getByText('1')).toBeInTheDocument();
        expect(screen.getByText('+')).toBeInTheDocument();
    });

    it('should be able to click on digits', ()=>{
        fireEvent.click(screen.getByText("2"));
        fireEvent.click(screen.getByText("5"));
        expect(screen.getByText('25')).toBeInTheDocument();
    });

    it('should be able to perform calculation', ()=>{
        fireEvent.click(screen.getByText("+"));
        fireEvent.click(screen.getByText("5"));
        fireEvent.click(screen.getByText("="));
        expect(screen.getByText('30')).toBeInTheDocument();
    });
})