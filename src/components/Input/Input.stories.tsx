import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Marbella/InputField",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = (args) => (
  <Input data-testId="InputField-id" {...args} />
);
Primary.args = {
  primary: true,
  error: false,
  disabled: false,
  label: "Primary",
};

export const Secondary: Story = (args) => (
  <Input data-testId="InputField-id" {...args} />
);
Secondary.args = {
  primary: false,
  error: false,
  disabled: false,
  label: "Primary",
};

export const Success: Story = (args) => (
  <Input data-testId="InputField-id" {...args} />
);
Success.args = {
  primary: true,
  error: false,
  success: true,
  disabled: false,
  label: "Success",
};

export const Error: Story = (args) => (
  <Input data-testId="InputField-id" {...args} />
);
Error.args = {
  primary: true,
  error: true,
  disabled: false,
  message: "Error",
};

export const Disabled: Story = (args) => (
  <Input data-testId="InputField-id" {...args} />
);
Disabled.args = {
  primary: true,
  disabled: true,
  label: "Disabled",
};
