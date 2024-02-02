import React from "react";
import { ButtonProps } from "./types";
import { StyledButton } from "./styles";

const Button: React.FC<ButtonProps> = ({
  size,
  color,
  disabled,
  variant,
  rounded,
  text,
  fullWidth,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      color={color}
      disabled={disabled}
      size={size}
      variant={variant}
      rounded={rounded}
      fullWidth={fullWidth}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

export default Button;