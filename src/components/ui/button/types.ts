import { MouseEventHandler } from "react";
export type ButtonProps = {
  text?: string;
  color?: "primary" | "info" | "warning" | "danger" | "success" | "secondary";
  variant?: "solid" | "outlined" | "ghost";
  rounded?: boolean;
  disabled?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
  fullWidth?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
