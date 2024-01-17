import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: "Elements/Checkbox",
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = (args) => (
  <Checkbox data-testId="CheckboxPrimary-id" {...args} />
);
Primary.args = {
  isChecked: false,
  primary: true,
  size: "medium",
  onToggle() {
    console.log("Checkbox toggled!");
  },
};

export const Secondary: Story = (args) => (
  <Checkbox data-testId="CheckboxSecondary-id" {...args} />
);
Secondary.args = {
  isChecked: false,
  primary: false,
  size: "medium",
};

export const Small: Story = (args) => (
  <Checkbox data-testId="CheckboxSmall-id" {...args} />
);
Small.args = {
  isChecked: false,
  primary: true,
  size: "small",
};

export const Large: Story = (args) => (
  <Checkbox data-testId="CheckboxLarge-id" {...args} />
);
Large.args = {
  isChecked: false,
  primary: true,
  size: "large",
};

export const Checked: Story = (args) => (
  <Checkbox data-testId="CheckboxChecked-id" {...args} />
);
Checked.args = {
  isChecked: true,
  primary: true,
  size: "medium",
};

export const Unchecked: Story = (args) => (
  <Checkbox data-testId="CheckboxUnchecked-id" {...args} />
);
Unchecked.args = {
  isChecked: false,
  primary: true,
  size: "medium",
};
