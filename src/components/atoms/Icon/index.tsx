import React from "react";

interface IconProps {
  iconSrc: string;
}

export const Icon = (props: IconProps) => {
  const { iconSrc } = props;
  return <img src={iconSrc} alt="icon" />;
};
