import React from "react";
import { Grid } from "@mui/material";
import { Avatar } from "../../atoms/Avatar/index";
import { Button } from "../../atoms/Button/index";
import { Typography } from "../../atoms/Typography/index";

interface CheckoutSuccessProps {
  amount: string;
}

export const CheckoutSuccess = (props: CheckoutSuccessProps) => {
  return (
    <>
      <Grid container>
        <Grid item>
          <Avatar src="tickmark.png" />
        </Grid>
        <Grid item>
          <Typography children={props.amount} variant="h1" />
        </Grid>
        <Grid item>
          <Grid container direction="row">
            <Grid item>
              <Button
                children="Buy Crypto"
                onclick={() => {}}
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <Button
                children="Go To Usd Coin"
                onclick={() => {}}
                variant="contained"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
