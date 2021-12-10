import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Digit } from './Digit';
import { StoreContext } from '../store/GlobalStore';

interface DigitsOperationsSlab {
    onClick: (value: string) => void
}

interface FormRowProps {
    tiles: (string)[],
    onClick: (value: string) => void
}

const FormRow = (props: FormRowProps) => {
    return (
        <React.Fragment>
            {props.tiles.map((tile, index) => (
                <Grid item xs={3} key={index} className="digitsGrid">
                    <Digit title={tile} onClick={props.onClick}/>
                </Grid>
            ))}
        </React.Fragment>
    );
}

export default function DigitsOperationSlab(props: DigitsOperationsSlab) {
    const store = React.useContext(StoreContext);
    const { calcStore } = store;
    return (
            <Grid>
                {calcStore.tileTiles.map((items, index) => (
                    <Grid container item spacing={3} key={index}>
                        <FormRow tiles={items} onClick={props.onClick}/>
                    </Grid>
                ))}
            </Grid>
    );
}
