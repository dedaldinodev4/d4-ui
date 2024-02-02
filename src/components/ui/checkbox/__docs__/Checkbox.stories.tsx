import { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Components/UI/Forms/Checkbox",
  argTypes: {},
  component: Example, 
}; 
export default meta;

type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    label: "Checkbox",
    value: true,
  }
};
