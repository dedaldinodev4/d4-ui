import React, { FC } from "react";
import Input from "../Input";
import { InputProps } from "../types";

const Example: FC<InputProps> = ({
  id = "input-group",
  size = "sm",
  disabled = false,
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
      <Input 
        id={id}
        disabled={disabled}
        onChange={onChange}
        size={size}
        key={id}
        {...props}
      />
    </div>
  );
};

export default Example;
