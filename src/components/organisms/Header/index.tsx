import React from "react";
import { Grid } from "@mui/material";
import { Button } from "../../atoms/Button/index";
import { Typography } from "../../atoms/Typography/index";
import { Avatar } from "../../atoms/Avatar/index";

export const Header = () => {
  return (
    <>
      <Grid container>
        <Grid item>
          <Typography children="Dashboard" variant="h3" />
        </Grid>
        <Grid item>
          <Grid container>
            <Grid item>
              <Button children="sell" onclick={() => {}} variant="contained" />
            </Grid>
            <Grid item>
              <Button children="Buy" onclick={() => {}} variant="contained" />
            </Grid>
            <Grid item>
              <Avatar src="user.png" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
