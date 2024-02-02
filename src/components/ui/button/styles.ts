import styled from "styled-components";

import { ButtonProps } from "./types";
import { getButtonColors } from "../../../utils/colors";
import { getButtonSize } from "../../../utils/sizes";

export const StyledButton = styled.button<ButtonProps>`
  width: ${(props) => props.fullWidth ? `100%` : `100px`};
  border: ${(props) =>
    props.variant === "outlined" 
      ? `2px solid ${getButtonColors(props.color)}`
      : props.variant === "ghost"
        ? "none"
        : "0"};
  line-height: 1;
  font-size: ${(props) => (props.size === "xs" ? "10px" : "15px")};
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: ${(props) => (props.rounded ? "10px" : "4px")};
  display: inline-block;
  color: ${(props) =>
    props.variant === "outlined" || props.variant === "ghost"
      ? getButtonColors(props.color)
      : props.color === "secondary"
        ? "#000"
        : "#fff"};
  background-color: ${(props) =>
    props.variant === "outlined" || props.variant === "ghost"
      ? "transparent"
      : props.color === "primary"
        ? getButtonColors()
        : getButtonColors(props.color)};
  padding: ${(props) =>
    props.size === "xs" ? getButtonSize() : getButtonSize(props.size)};
`;
