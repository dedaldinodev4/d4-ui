import React, { FC } from "react";
import { Container, StyledCheckBox } from "./styles";
import { InvisibleHTMLCheckbox } from "./partials/invisibleHTMLCheckbox";
import { CheckboxProps } from "./types";

const Checkbox: FC<CheckboxProps> = ({
  value,
  onChange,
  label,
  className,
}) => (
  <Container className={className}>
    <StyledCheckBox isChecked={value}>{value}</StyledCheckBox>
    {label}
    <InvisibleHTMLCheckbox value={value} onChange={onChange} />
  </Container>
);

export default Checkbox;