import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Elements/Button",
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);
Primary.args = {
  width: 200,
  height: 50,
  fontSize: 16,
  primary: true,
  disabled: false,
  text: "Primary",
};

export const Secondary: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);
Secondary.args = {
  width: 200,
  height: 50,
  fontSize: 16,
  primary: false,
  disabled: false,
  text: "Secondary",
};

export const Disabled: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);
Disabled.args = {
  width: 200,
  height: 50,
  fontSize: 16,
  primary: false,
  disabled: true,
  text: "Disabled",
};
