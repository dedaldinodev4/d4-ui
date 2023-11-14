import React from "react";
import { ButtonProps } from "./types";
import { StyledButton } from "./styles";

const Button: React.FC<ButtonProps> = ({
  size,
  color,
  disabled,
  outline,
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
      outline={outline}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

export default Button;