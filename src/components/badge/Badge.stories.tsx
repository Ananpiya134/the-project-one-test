import { Typography } from "@components/typography";

import Badge from "./Badge";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Badge> = {
  component: Badge,
  tags: ["autodocs"],
  title: "Components/Badge",
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    className: "bg-info",
    children: (
      <Typography className="text-cream" variant="label-xs">
        Agent
      </Typography>
    ),
  },
};
