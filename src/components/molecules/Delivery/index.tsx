import React from "react";
import { FormControl, InputLabel, Select } from "@mui/material";
import { Typography } from "../../atoms/Typography/index";

interface DeliveryProps {
  deliveryOptions: string[];
}

export const Delivery = (props: DeliveryProps) => {
  const { deliveryOptions } = props;
  return (
    <div>
      <Typography children="Select speed delivery" variant="" />
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel>Name</InputLabel>
        <Select value={deliveryOptions} multiple onChange={() => {}}></Select>
      </FormControl>
    </div>
  );
};
