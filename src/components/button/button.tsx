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
      {...props}
    >
      {text}
    </StyledButton>
  );
};

export default Button;