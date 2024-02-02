import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Components/UI/Button",
  component: Example,
  argTypes: {
    variant: {
      control: {
        type: "radio", 
        options: ["solid", "outlined", "ghost"],
      },
    },
    size: {
      control: { type: "radio", options: ["xs", "sm", "md", "lg"] },
    },
    color: {
      control: {
        type: "radio",
        options: [
          "primary",
          "secondary",
          "success",
          "info",
          "warning",
          "danger", 
        ],
      },
    },
  },
};

export default meta; 

type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    text: "Button",
    color: "primary",
    disabled: false,
    fullWidth: false,
    variant: "solid",
    size: "sm",
    onClick: () => console.log("Button"),
  },
};

export const Outlined: Story = {
  args: {
    text: "Button",
    color: "primary",
    variant: "outlined",
    disabled: false,
    fullWidth: false,
    rounded: false,
    size: "sm",
    onClick: () => console.log("Button"),
  },
};

export const Ghost: Story = {
  args: {
    text: "Button",
    color: "primary", 
    variant: "ghost",
    disabled: false, 
    fullWidth: false,
    rounded: false,
    size: "sm",
    onClick: () => console.log("Button"),
  }, 
};

/*export const Secondary: Story = {
  args: {
    text: "Button",
    color: "secondary",
    variant: "solid",
    disabled: false,
    rounded: false,
    size: "sm",
    onClick: () => console.log("Button"),
  },
};

export const Success: Story = {
  args: {
    text: "Button",
    color: "success",
    disabled: false,
    rounded: false,
    variant: "solid",
    size: "sm",
    onClick: () => console.log("Success Button"),
  },
};

export const Info: Story = {
  args: {
    text: "Button",
    color: "info",
    disabled: false,
    rounded: false,
    variant: "solid",
    size: "sm",
    onClick: () => console.log("Info Button"),
  },
};
export const Warning: Story = {
  args: {
    text: "Button",
    color: "warning",
    disabled: false,
    rounded: false,
    variant: "solid",
    size: "sm",
    onClick: () => console.log("Warning Button"),
  },
};
export const Danger: Story = {
  args: {
    text: "Button",
    color: "danger",
    disabled: false,
    rounded: false,
    variant: "solid",
    size: "sm",
    onClick: () => console.log("Danger Button"),
  },
}; 
*/