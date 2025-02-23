import type { Meta, StoryObj } from "@storybook/react";

import Card from "@/components/Card.tsx";

const meta = {
  title: "Elements/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
      description: "Size of the Card",
    },
    title: {
      control: "text",
      description:
        "Title text to be displayed on the top bar of the Card component",
    },
  },
  args: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const regular: Story = {
  args: {
    size: "sm",
    title: "Title",
  },
};
