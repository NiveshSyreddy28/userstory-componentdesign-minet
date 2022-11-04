import React from 'react'
import { Grid } from '@mui/material'
import { Avatar } from '../../atoms/Avatar/index'
import { Typography } from '../../atoms/Typography/index'

interface CryptoCardInterface {
    src: string;
    currencyName : string;
    currencyValue : string;
} 

export const CryptoCard = (props : CryptoCardInterface) => {
  return (
    <>
        <Grid container direction="column" >
            <Grid item>
                <Avatar src={props.src}/>
            </Grid>
            <Grid item>
                <Typography variant='h3' children={props.currencyName}/>
            </Grid>
            <Grid item>
                <Typography variant='h3' children={props.currencyValue}/>
            </Grid>

        </Grid>
    </>
  )
}