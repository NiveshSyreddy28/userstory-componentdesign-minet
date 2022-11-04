import React from "react";
import { Grid } from "@mui/material";
import { Button } from "../../atoms/Button/index";
import { Typography } from "../../atoms/Typography/index";

interface BuyCryptoProps {
  buyingAmount: string;
}
export const BuyCrypto = (props: BuyCryptoProps) => {
  return (
    <>
      <Grid container>
        <Grid item>
          <Grid container>
            <Grid item>
              <Typography children="You are buying" variant="h3" />
            </Grid>
            <Grid item>
              <Typography children={props.buyingAmount} variant="h2" />
            </Grid>
            <Grid item>
              <Typography children="1BTC = $3,406,069.54" variant="h3" />
            </Grid>
          </Grid>
        </Grid>

        <Grid item></Grid>
        <Grid item>
          <Button children="Buy Now" variant="contained" onclick={() => {}} />
        </Grid>
      </Grid>
    </>
  );
};
