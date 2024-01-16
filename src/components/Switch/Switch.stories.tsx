import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Switch from "./Switch";

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: "Components/Switch",
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Primary: Story = (args) => (
  <Switch data-testId="SwitchField-id" {...args} />
);
Primary.args = {
  isChecked: false,
  primary: true,
  size: "medium",
  onToggle() {
      console.log("Switch toggled!");
  },
};

export const Secondary: Story = (args) => (
  <Switch data-testId="SwitchField-id" {...args} />
);
Secondary.args = {
  isChecked: false,
  primary: false,
  size: "medium",
};

export const Small: Story = (args) => (
  <Switch data-testId="SwitchField-id" {...args} />
);
Small.args = {
  isChecked: false,
  primary: true,
  size: "small",
};

export const Large: Story = (args) => (
  <Switch data-testId="SwitchField-id" {...args} />
);
Large.args = {
  isChecked: false,
  primary: true,
  size: "large",
};

export const Checked: Story = (args) => (
  <Switch data-testId="SwitchField-id" {...args} />
);
Checked.args = {
  isChecked: true,
  primary: true,
  size: "medium",
};

export const Unchecked: Story = (args) => (
  <Switch data-testId="SwitchField-id" {...args} />
);
Unchecked.args = {
  isChecked: false,
  primary: true,
  size: "medium",
};
