import React from 'react'
import { Grid, Typography } from '@mui/material'
import { Button } from '../../atoms/Button/index'

interface AmountDetailsProps {
    amount : string
}

export const AmountDetails = (props : AmountDetailsProps) => {
    return (
        <>
            <Typography children="Amount details"/>
            <Grid container>
                <Grid item>
                <Typography  children={props.amount}/>
                </Grid>
                <Grid item>
                <Button children="Buy max" variant='outlined' onclick={ () => {} } />
                </Grid>
            </Grid>
        </>
    )
}