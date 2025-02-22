import type { Meta, StoryObj } from '@storybook/react';

import Card from '@/components/Card.tsx';

const meta = {
  title: 'Elements/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: { },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
