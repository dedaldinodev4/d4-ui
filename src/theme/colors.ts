export interface IColorInput {
  disabled: string;
  error: string;
  success: string;
  primary: string;
  hover: string;
}

export interface IColorButton {
  primary: string;
  secondary: string;
  success: string;
  danger: string;
  info?: string;
  warning?: string;
}

interface ITheme {
  color: {
    button: IColorButton;
    input: IColorInput;
  }
}

export const theme: ITheme = {
  color: {
    button: {
      primary: "#7C3AED",
      secondary: "#DDD6FE",
      success: "#10B981",
      danger: "#B91C1C",
      info: "#2563EB",
      warning: "#F59E0B"
    },
    input: {
      primary: "#7C3AED",
      success: "#10B981",
      disabled: "#DDD6FE",
      error: "#B91C1C",
      hover: "#3B82F6",
    }
  }
}
