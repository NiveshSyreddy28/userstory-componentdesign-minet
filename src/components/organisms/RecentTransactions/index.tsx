import React, { useEffect } from "react";
import { Grid } from "@mui/material";

interface RecentTransactionProps {
  date: string;
  isSold: boolean;
  isPurchased: boolean;
  priceInDollars: string;
  priceInCrypto: string;
}

export const RecentTransaction = (props: RecentTransactionProps) => {
  let recentTransactions = [""];
  useEffect(() => {
    // get recent transaction data
    recentTransactions = [];
  }, []);
  return (
    <div>
      {recentTransactions.map((recentTransaction) => (
        <Grid container direction="row">
          {/* display recent transactions */}
        </Grid>
      ))}
    </div>
  );
};
