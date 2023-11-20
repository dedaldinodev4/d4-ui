import { ChangeEventHandler } from "react";

export interface InputProps {
  id?: string;
  label?: string;
  variant?: "solid" | "outlined" | "flushed" | "unstyled";
  size?: "xs" | "sm" | "md" | "lg";
  error?: boolean;
  message?: string;
  success?: boolean;
  disabled?: boolean;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}