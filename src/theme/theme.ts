import { IColorButton, IColorInput } from "./colors";
import { IButtonSize, IInputFieldSize } from "./sizes";

interface ITheme {
  color: {
    button: IColorButton;
    input: IColorInput;
  },
  size: {
    button: IButtonSize,
    input: IInputFieldSize,
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
    },
  },
  size: {
    button: {
      xl: "4px 20px 4px",
      sm: "7px 25px 8px",
      md: "9px 30px 11px",
      lg: "14px 30px 16px"
    },
    input: {
      xs: {
        width: "100px",
        height: "20px"
      },
      sm: {
        width: "150px",
        height: "25px"
      },
      md: {
        width: "200px",
        height: "30px"
      },
      lg: {
        width: "300px",
        height: "40px"
      },
    }
  }
}
