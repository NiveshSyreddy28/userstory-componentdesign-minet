import React from "react";
import { Grid } from "@mui/material";
import { Button } from "../../atoms/Button/index";

interface MyPortfolioCurrencyProps {
  buttons: string[];
}

export const MyPortfolioCurrency = (props: MyPortfolioCurrencyProps) => {
  return (
    <div>
      <Grid container direction="row">
        {props.buttons.map((button) => (
          <Grid item>
            <Button children={button} variant="contained" onclick={() => {}} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
