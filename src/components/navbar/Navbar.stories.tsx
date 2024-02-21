import Navbar from "./Navbar";

import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  tags: ["autodocs"],
  title: "Components/Navbar",
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {},
};
