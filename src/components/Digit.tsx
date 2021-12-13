import React from 'react';

interface DigitProps {
    title: string;
    onClick: (value: string) => void;
}

export const Digit = (props: DigitProps) => {
    return (
        <div className="digits-tile" onClick={()=>props.onClick(props.title)} data-testid="tile-component">
            {props.title}
        </div>
    )
}