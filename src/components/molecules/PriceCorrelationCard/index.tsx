import React from "react";
import { Grid } from "@mui/material";
import { Avatar } from "../../atoms/Avatar/index";

interface PriceCorrelationCardProps {
  src: string;
}

export const PriceCorrelationCard = (props: PriceCorrelationCardProps) => {
  return (
    <div>
      <Grid container direction="row">
        <Grid item>
          <Avatar src={props.src} />
        </Grid>
        <Grid item></Grid>
      </Grid>
    </div>
  );
};
