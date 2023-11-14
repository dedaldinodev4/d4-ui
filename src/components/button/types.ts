import { MouseEventHandler } from "react";
export type ButtonProps = {
  text?: string;
  color?: "primary" | "info" | "warning" | "danger" | "success" | "secondary";
  outline?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
