import React from "react";
import { Box, Grid } from "@mui/material";
import { Icon } from "../../atoms/Icon/index";
import { Typography } from "../../atoms/Typography/index";
import { Button } from "../../atoms/Button/index";

const MyWallet = () => {
  return (
    <div>
      <Grid direction={"column"}>
        <Grid item>
          <Typography children="My Wallets" variant={"h3"} />
        </Grid>
        <Grid item direction={"row"}>
          <Box>
            <Icon iconSrc="dollarIcon" />
            <Box>
              <Typography children="USD Coin" variant="h3" />
              <Typography children="UD Dollar" variant="h4" />
            </Box>
          </Box>
          <Typography children="$ 0.00" variant="h3" />
        </Grid>
        <Grid item direction={"row"}>
          <Typography children="Recent transactions" variant="h3" />
          <Button variant="text" children="View All" onclick={() => {}} />
        </Grid>
        <Grid item>
          <Box>
            <Icon iconSrc="transactionsImage" />
            <Typography
              variant="caption1"
              children="You don’t own any crypto. Send yourself some crypto to get started."
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default MyWallet;
