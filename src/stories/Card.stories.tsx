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
  },
  args: {
    size: "md",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  render: (args) => (
    <Card size={args.size}>
      <Card.Title>Hello</Card.Title>
      <Card.Content>testing</Card.Content>
    </Card>
  ),
};
