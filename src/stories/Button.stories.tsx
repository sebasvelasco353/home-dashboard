import type { Meta, StoryObj } from "@storybook/react";
import Button from "@/components/Button";

const meta: Meta<typeof Button> = {
  title: "Elements/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    text: {
      type: "string",
      control: "text",
      description: "The text that should be displayed",
    },
    secondary: {
      type: "boolean",
      control: "boolean",
      description: "Is this button primary or secondary",
    },
    handleClick: {
      type: "function",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const primary: Story = {
  args: {
    text: "Example Button",
  },
};
export const secondary: Story = {
  args: {
    text: "Example Button",
    secondary: true,
    handleClick: () => {
      console.log("Hello from button");
    },
  },
};
export const disabled: Story = {
  args: {
    text: "Example Button",
    disabled: true,
    handleClick: () => {
      console.log("Hello from button");
    },
  },
};
