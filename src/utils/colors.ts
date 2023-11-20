import { theme } from "../theme";

const { button, input } = theme.color;

//* Buttons *//
export const getButtonColors = (
  key:
    | "primary"
    | "secondary"
    | "info"
    | "danger"
    | "warning"
    | "success" = "primary",
): string => {
  return `${button[key]}`;
};

// Inputs
export const getInputColors = (
  key: "primary" | "success" | "error" | "disabled" | "hover",
): string => {
  return `${input[key]}`;
};
