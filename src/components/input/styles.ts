import styled from "styled-components";
import { InputProps } from "./types";
import { theme } from "../../theme";

const color = theme.color.input;

export const StyledInput = styled.input<InputProps>`
  height: 40px;
  width: 300px;
  border-radius: 3px;
  outline: none;
  border: ${(props) =>
    props.error
      ? `solid 2px ${color.error}`
      : props.success
        ? `solid 2px ${color.success}`
        : "none"};
  background-color: #fff;
  &:focus {
    border: solid 2px ${color.hover};
  }

  &:hover {
    border: solid 2px
      ${(props) =>
        props.disabled
          ? color.hover
          : props.error
            ? "#a9150b"
            : props.success
              ? "#067d68"
              : color.hover};
  }
`;

export const StyledLabel = styled.div<InputProps>`
  font-size: 14px;
  margin-bottom: 5px;
  font-weight: 700;
  text-align: left;
  color: ${(props) => (props.disabled ? color.disabled : "#080808")};
  padding-bottom: 6px;
`;

export const StyledMessage = styled.div<InputProps>`
  font-size: 14px;
  color: "#a9150b8";
  font-weight: 400;
  font-style: italic;
  padding-top: 4px;
`;

export const StyledText = styled.p<InputProps>`
  margin: 0px;
  color: ${(props) =>
    props.disabled ? "#ffecd1" : props.error ? "#a9150b" : "#080808"};
`;
