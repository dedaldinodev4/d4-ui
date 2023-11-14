import { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "InputField",
  argTypes: {},
  component: Example,
};
export default meta;

type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    error: false,
    disabled: false,
    label: "FirstName",
    placeholder: "Your firstName"
  }
};

export const Success: Story = {
  args: {
    error: false,
    success: true,
    disabled: false,
    label: "FirstName",
    placeholder: "Dedaldino",
  }
};

export const Error: Story = {
  args: {
    error: true,
    disabled: false,
    message: "Please fill out this field.",
  }
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "FirstName",
    placeholder: "Dedaldino"
  }
};