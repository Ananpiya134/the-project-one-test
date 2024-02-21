import { Typography } from "@components/typography";

import Button from "./Button";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  title: "Components/Button",
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: (
      <Typography className="text-cream" variant="label-s">
        Button
      </Typography>
    ),
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: (
      <Typography className="text-black-900" variant="label-s">
        Button
      </Typography>
    ),
    variant: "secondary",
  },
};

export const Warning: Story = {
  args: {
    children: (
      <Typography className="text-warning-900" variant="label-s">
        Button
      </Typography>
    ),
    variant: "warning",
  },
};

export const Critical: Story = {
  args: {
    children: (
      <Typography className="text-critical" variant="label-s">
        Button
      </Typography>
    ),
    variant: "critical",
  },
};
