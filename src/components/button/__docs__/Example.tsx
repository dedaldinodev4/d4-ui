import React, { FC } from "react";
import Button from "../Button";
import { ButtonProps } from "../types";

const Example: FC<ButtonProps> = ({
  disabled = false,
  onClick = () => {},
  color = "primary",
  size = "small",
  text = "Button",
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Button
        size={size}
        text={text}
        disabled={disabled}
        color={color}
        onClick={onClick}
      />
    </div>
  );
};

export default Example;
