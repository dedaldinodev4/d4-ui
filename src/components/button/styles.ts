import styled from "styled-components";
import { theme } from "../../theme";
import { ButtonProps } from "./types";

const color = theme.color.button;

export const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 10px;
  display: inline-block;
  color: ${(props) => (props.color === "secondary" ? "#000" : "#fff")};
  background-color: ${(props) =>
    props.color === "info"
      ? color.info
      : props.color === "danger"
        ? color.danger
        : props.color === "success"
          ? color.success
          : props.color === "warning"
            ? color.warning
            : props.color === "secondary"
              ? color.secondary
              : color.primary};
  padding: ${(props) =>
    props.size === "small"
      ? "7px 25px 8px"
      : props.size === "medium"
        ? "9px 30px 11px"
        : "14px 30px 16px"};
`;
