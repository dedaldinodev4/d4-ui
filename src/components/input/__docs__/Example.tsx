import React, { FC } from "react";
import Input from "../Input";
import { InputProps } from "../types";

const Example: FC<InputProps> = ({
  id = "input-group",
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
        key={id}
        {...props}
      />
    </div>
  );
};

export default Example;
