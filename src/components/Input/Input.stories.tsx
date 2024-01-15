import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Elements/Input",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = (args) => (
  <Input data-testId="InputField-id" {...args} />
);
Primary.args = {
  width: 400,
  height: 50,
  fontSize: 20,
  primary: true,
  error: false,
  disabled: false,
  label: "Primary",
};

export const Secondary: Story = (args) => (
  <Input data-testId="InputField-id" {...args} />
);
Secondary.args = {
  width: 400,
  height: 50,
  fontSize: 20,
  primary: false,
  error: false,
  disabled: false,
  label: "Primary",
};

export const Success: Story = (args) => (
  <Input data-testId="InputField-id" {...args} />
);
Success.args = {
  width: 400,
  height: 50,
  fontSize: 20,
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
  width: 400,
  height: 50,
  fontSize: 20,
  primary: true,
  error: true,
  disabled: false,
  message: "Error",
};

export const Disabled: Story = (args) => (
  <Input data-testId="InputField-id" {...args} />
);
Disabled.args = {
  width: 400,
  height: 50,
  fontSize: 20,
  primary: true,
  disabled: true,
  label: "Disabled",
};
