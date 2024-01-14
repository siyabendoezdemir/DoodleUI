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
  primary: true,
  size: "medium",
  error: false,
  disabled: false,
  label: "Primary",
};

export const Secondary: Story = (args) => (
  <Input data-testId="InputField-id" {...args} />
);
Secondary.args = {
  primary: false,
  size: "medium",
  error: false,
  disabled: false,
  label: "Primary",
};

export const Small: Story = (args) => (
  <Input data-testId="InputField-id" {...args} />
);
Small.args = {
  primary: true,
  size: "small",
  error: false,
  disabled: false,
  label: "Primary",
};

export const Medium: Story = (args) => (
  <Input data-testId="InputField-id" {...args} />
);
Medium.args = {
  primary: true,
  size: "medium",
  error: false,
  disabled: false,
  label: "Primary",
};

export const Large: Story = (args) => (
  <Input data-testId="InputField-id" {...args} />
);
Large.args = {
  primary: true,
  size: "large",
  error: false,
  disabled: false,
  label: "Primary",
};

export const Success: Story = (args) => (
  <Input data-testId="InputField-id" {...args} />
);
Success.args = {
  primary: true,
  size: "medium",
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
  size: "medium",
  error: true,
  disabled: false,
  message: "Error",
};

export const Disabled: Story = (args) => (
  <Input data-testId="InputField-id" {...args} />
);
Disabled.args = {
  primary: true,
  size: "medium",
  disabled: true,
  label: "Disabled",
};
