import Typography from "./Typography";
import { typographyDetailList } from "./helpers";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Typography> = {
  argTypes: {
    asChild: {
      control: false,
    },
  },
  component: Typography,
  title: "Bases/Typography",
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  render: () => {
    return (
      <>
        <div className="grid grid-cols-5 gap-2">
          <div className="col-span-2 flex justify-center border">
            <Typography>Typography</Typography>
          </div>
          <div className="flex justify-center border">
            <Typography>Font Size</Typography>
          </div>
          <div className="flex justify-center border">
            <Typography>Line Height</Typography>
          </div>
          <div className="flex justify-center border">
            <Typography>Weight</Typography>
          </div>
        </div>
        {typographyDetailList.map(
          ({ fontSize, lineHeight, variant, weight }) => (
            <div className="gap2 grid grid-cols-5">
              <div className="col-span-2">
                <Typography variant={variant}>{variant}</Typography>
              </div>
              <div>{`${fontSize}px`}</div>
              <div>{`${lineHeight}px`}</div>
              <div>{weight}</div>
            </div>
          )
        )}
      </>
    );
  },
};
