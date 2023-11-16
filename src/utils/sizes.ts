import { theme } from "../theme";
const { button } = theme.size;

export const getButtonSize = (
  key: "xs" | "sm" | "md" | "lg" = "xs",
): string => {
  return `${button[key]}`;
};
