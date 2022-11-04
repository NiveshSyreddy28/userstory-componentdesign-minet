import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { Avatar } from "../../atoms/Avatar/index";

interface PriceCorrelationCardProps {
  src: string;
}

export const PriceCorrelationCard = (props: PriceCorrelationCardProps) => {
  let data = [""];
  useEffect(() => {
    //get data
  }, []);
  return (
    <div>
      {data.map((data) => (
        <Grid container direction="row">
          <Grid item>
            <Avatar src={props.src} />
          </Grid>
          <Grid item>{/* display crypto details */}</Grid>
        </Grid>
      ))}
    </div>
  );
};
