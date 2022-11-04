import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { Button } from "../../atoms/Button/index";

interface MyPortfolioCurrencyProps {
  buttons: string[];
}

export const MyPortfolioCurrency = (props: MyPortfolioCurrencyProps) => {
  useEffect(() => {
    // get data
  }, []);
  const handleChange = () => {};
  return (
    <div>
      <Grid container direction="row">
        {props.buttons.map((button) => (
          <Grid item>
            <Button
              children={button}
              variant="contained"
              onclick={handleChange}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
