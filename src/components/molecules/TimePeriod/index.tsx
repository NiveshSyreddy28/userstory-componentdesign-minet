import React from "react";
import { Grid } from "@mui/material";
import { Typography } from "../../atoms/Typography/index";

const timePeriod = ["1H", "24H", "1W", "1M", "1Y"];

export const TimePeriod = () => {
  return (
    <>
      <Grid container direction="row">
        {timePeriod.map((period) => (
          <Grid item>
            <Typography children={period} variant="h3" />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
