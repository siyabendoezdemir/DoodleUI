import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Radio from "./Radio";

const meta: Meta<typeof Radio> = {
  component: Radio,
  title: "Elements/Radio",
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Radio>;

export const Primary: Story = (args) => (
  <Radio data-testId="RadioPrimary-id" {...args} />
);
Primary.args = {
  isChecked: false,
  primary: true,
  size: "medium",
  label: "Yes I understand",
};

export const Secondary: Story = (args) => (
  <Radio data-testId="RadioSecondary-id" {...args} />
);
Secondary.args = {
  isChecked: false,
  primary: false,
  size: "medium",
};

export const Small: Story = (args) => (
  <Radio data-testId="RadioSmall-id" {...args} />
);
Small.args = {
  isChecked: false,
  primary: true,
  size: "small",
};

export const Large: Story = (args) => (
  <Radio data-testId="RadioLarge-id" {...args} />
);
Large.args = {
  isChecked: false,
  primary: true,
  size: "large",
};

export const Checked: Story = (args) => (
  <Radio data-testId="RadioChecked-id" {...args} />
);
Checked.args = {
  isChecked: true,
  primary: true,
  size: "medium",
};

export const Unchecked: Story = (args) => (
  <Radio data-testId="RadioUnchecked-id" {...args} />
);
Unchecked.args = {
  isChecked: false,
  primary: true,
  size: "medium",
};
