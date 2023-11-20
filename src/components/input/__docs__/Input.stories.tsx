import { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Components/Forms/Input",
  argTypes: {
    variant: {
      control: {
        type: "radio", 
        options: ["solid", "outlined", "flushed", "unstyled"],
      },
    },
    size: {
      control: {
        type: "radio", 
        options: ["xs", "sm", "md", "lg"],
      },
    }
  },
  component: Example, 
};
export default meta;

type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    error: false,
    disabled: false,
    label: "FirstName",
    variant: "solid",
    size: "sm",
    placeholder: "Your firstName"
  }
};

export const Success: Story = {
  args: {
    error: false,
    success: true,
    disabled: false,
    variant: "solid",
    label: "FirstName",
    size: "sm",
    placeholder: "Dedaldino",
  }
};

export const Error: Story = {
  args: {
    error: true,
    disabled: false,
    variant: "solid",
    size: "sm",
    message: "Please fill out this field.",
  }
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "FirstName",
    variant: "solid",
    size: "sm",
    placeholder: "Dedaldino"
  }
}; 