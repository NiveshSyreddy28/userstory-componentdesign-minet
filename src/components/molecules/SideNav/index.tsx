import React from "react";
import { Grid } from "@mui/material";
import { Icon } from "../../atoms/Icon/index";
import { Logo } from "../../atoms/Logo/index";
const SideNav = () => {
  return (
    <div>
      <Grid container direction="column">
        <Grid item>
          <Logo logoSrc="minetLogo" />
        </Grid>
        <Grid item>
          <Icon iconSrc="watchList" />
        </Grid>
        <Grid item>
          <Icon iconSrc="charts" />
        </Grid>
        <Grid item>
          <Icon iconSrc="Trade" />
        </Grid>
        <Grid item>
          <Icon iconSrc="notification" />
        </Grid>
        <Grid item>
          <Icon iconSrc="Logout" />
        </Grid>
      </Grid>
    </div>
  );
};

export default SideNav;
