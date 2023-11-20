import { theme } from "../theme";
import { ISize } from "../theme/sizes";
const { button, input } = theme.size;


export const getButtonSize = (
  key: "xs" | "sm" | "md" | "lg" = "xs",
): string => {
  return `${button[key]}`;
};

export const getInputFieldSize = (
  key: "xs" | "sm" | "md" | "lg" = "lg",
): ISize => {
  return input[key];
};


