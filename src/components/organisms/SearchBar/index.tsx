import React from "react";
import TextField from '@mui/material/TextField';

interface SearchBarProps {
  handleChange: () => void;
}

export const SearchBar = (props: SearchBarProps) => {
  return (
    <>
      <TextField onChange={props.handleChange} />
    </>
  );
};
