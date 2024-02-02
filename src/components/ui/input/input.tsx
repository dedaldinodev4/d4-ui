import { FC, Fragment } from "react";
import { InputProps } from "./types";
import { StyledInput, StyledLabel, StyledMessage, StyledText } from "./styles";

const Input: FC<InputProps> = ({
  id,
  disabled,
  label,
  size,
  variant, 
  message,
  error,
  success,
  onChange,
  placeholder,
  ...props
}) => {
  return (
    <Fragment>
      <StyledLabel>
        <StyledText disabled={disabled} error={error}>
          {label}
        </StyledText>
      </StyledLabel>
      <StyledInput
        id={id}
        type="text"
        onChange={onChange}
        disabled={disabled}
        size={size}
        error={error}
        variant={variant}
        success={success}
        placeholder={placeholder}
        {...props}
      ></StyledInput>
      <StyledMessage>
        <StyledText error={error}>{message}</StyledText>
      </StyledMessage>
    </Fragment>
  );
};

export default Input;
