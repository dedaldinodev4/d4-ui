import React, { FC } from "react";
import Checkbox from "../Checkbox";
import { CheckboxProps } from "../types";

const Example: FC<CheckboxProps> = ({
  label = "Checkbox",
  value = true,
  onChange = () => {},
  ...props
}) => {
  return (
    <div
      style={{
        display: "flex", 
        flexDirection: "column", 
        height: "100%",
      }}
    >
      <Checkbox value={value} label={label} onChange={onChange} {...props} />
    </div>
  );
};

export default Example; 
