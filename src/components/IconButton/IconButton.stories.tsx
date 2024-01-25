import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import IconButton from "./IconButton";

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: "Elements/Icon Button",
  tags: ["autodocs"],
  argTypes: {
    iconType: {
      control: { type: "radio" },
      options: ["solid", "regular"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof IconButton>;

export const Primary: Story = (args) => (
  <IconButton data-testId="IconButtonPrimary-id" {...args} />
);
Primary.args = {
  iconName: "user",
  iconType: "regular",
  size: "normal",
  iconColor: "#000",
  backgroundColor: "#fff",
  borderColor: "#000",
  borderRadius: 5,
};

export const Secondary: Story = (args) => (
  <IconButton data-testId="IconButtonSecondary-id" {...args} />
);
Secondary.args = {
  iconName: "user",
  iconType: "regular",
  size: "normal",
  iconColor: "#fff",
  backgroundColor: "#000",
  borderColor: "#fff",
  borderRadius: 5,
};
