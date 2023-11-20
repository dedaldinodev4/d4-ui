import styled from "styled-components";
import { InputProps } from "./types";
import { theme } from "../../theme";
import { getInputColors } from "../../utils/colors";
import { getInputFieldSize } from "../../utils/sizes";

const color = theme.color.input;

export const StyledInput = styled.input<InputProps>`
  height: ${(props) =>
    props.size !== "lg"
      ? getInputFieldSize(props.size).height
      : getInputFieldSize().height};
  width: ${(props) =>
    props.size !== "lg"
      ? getInputFieldSize(props.size).width
      : getInputFieldSize().width};
  border-radius: 3px;
  outline: none;
  border: ${(props) =>
    props.error
      ? `solid 2px ${getInputColors("error")}`
      : props.success
        ? `solid 2px ${getInputColors("success")}`
        : "none"};
  background-color: #fff;
  &:focus {
    border: solid 2px ${getInputColors("hover")};
  }

  &:hover {
    border: solid 2px
      ${(props) =>
        props.disabled
          ? getInputColors("hover")
          : props.error
            ? getInputColors("error")
            : props.success
              ? getInputColors("success")
              : getInputColors("hover")};
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
    props.disabled
      ? "#ffecd1"
      : props.error
        ? getInputColors("error")
        : "#080808"};
`;
