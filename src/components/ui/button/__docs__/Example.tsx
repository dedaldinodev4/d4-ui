import React, { FC } from "react";
import Button from "../Button";
import { ButtonProps } from "../types";

const Example: FC<ButtonProps> = ({
  disabled = false,
  rounded = false,
  onClick = () => {},
  color = "primary",
  variant = "solid",
  size = "sm",
  text = "Button", 
  fullWidth=false,
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
        variant={variant}
        size={size}
        text={text}
        disabled={disabled}
        rounded={rounded} 
        color={color}
        onClick={onClick}
        fullWidth={fullWidth}
      />
    </div>
  );
};

export default Example;
 