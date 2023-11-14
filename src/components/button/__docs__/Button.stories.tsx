import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Button", 
  component: Example,
};

export default meta;

type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    text: "Button",
    color: "primary",
    disabled: false,
    size: "small",
    onClick: () => console.log("Button"),
  },
};
export const Secondary: Story = {
  args: {
    text: "Button",
    color: "secondary",
    disabled: false,
    size: "small",
    onClick: () => console.log("Button"),
  },
};

export const Success: Story = {
  args: { 
    text: "Button",
    color: "success",
    disabled: false,
    size: "small",
    onClick: () => console.log("Success Button"),
  },
}

export const Info: Story = {
  args: {
    text: "Button",
    color: "info",
    disabled: false,
    size: "small",
    onClick: () => console.log("Info Button"),
  },
}
export const Warning: Story = {
  args: {
    text: "Button",
    color: "warning",
    disabled: false,
    size: "small",
    onClick: () => console.log("Warning Button"),
  },
}
export const Danger: Story = {
  args: {
    text: "Button",
    color: "danger",
    disabled: false,
    size: "small",
    onClick: () => console.log("Danger Button"),
  },
};
