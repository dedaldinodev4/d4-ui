import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  font-weight: 500;
`;

export const StyledCheckBox = styled.div<{ isChecked: boolean }>`
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 2px solid #777;
  color: #fff;
  transition: 0.35s ease-in-out;

  ${({ isChecked }) =>
    isChecked &&
    css`
      background: #777;
    `}
`;
