import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Icon from "./Icon";

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: "Elements/Icon",
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["solid", "regular"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Icon>;

export const Primary: Story = (args) => (
  <Icon data-testId="IconPrimary-id" {...args} />
);
Primary.args = {
  name: "faCalendar",
};
