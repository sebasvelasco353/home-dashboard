import type { Meta, StoryObj } from "@storybook/react";
import Button from "@/components/Button";

const meta: Meta<typeof Button> = {
  title: "Elements/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
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
  },
};
