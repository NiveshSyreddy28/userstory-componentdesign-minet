import React, { useState } from "react";
import { FormControl, InputLabel, Select } from "@mui/material";
import { Typography } from "../../atoms/Typography/index";

interface DeliveryProps {
  deliveryOptions: string[];
}

export const Delivery = (props: DeliveryProps) => {
  const [deliveryOption, setDeliveryOption] = useState();
  const handleChange = (e: any) => {
    setDeliveryOption(e.target.value);
  };
  return (
    <div>
      <Typography children="Select speed delivery" variant="" />
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel>Name</InputLabel>
        <Select
          value={deliveryOption}
          multiple
          onChange={handleChange}
        ></Select>
      </FormControl>
    </div>
  );
};
