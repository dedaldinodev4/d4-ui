import { theme } from "../theme";

const { button } = theme.color;

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


