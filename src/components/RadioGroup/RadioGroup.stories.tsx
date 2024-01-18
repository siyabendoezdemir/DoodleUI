import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import RadioGroup from "./RadioGroup";

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  title: "Elements/RadioGroup",
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    spacing: {
      control: { type: "range", min: 1, max: 50, step: 1 },
    },
  },
};
export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Primary: Story = (args) => (
  <RadioGroup data-testId="RadioGroupPrimary-id" {...args} />
);
Primary.args = {
  groupName: "RadioGroup",
  options: [
    { label: "Option 1", value: "option1", primary: true },
    { label: "Option 2", value: "option2", primary: true },
  ],
  onChange: (value) => console.log(`Selected: ${value}`),
};

export const Secondary: Story = (args) => (
  <RadioGroup data-testId="RadioGroupSecondary-id" {...args} />
);
Secondary.args = {
  groupName: "RadioGroup",
  options: [
    { label: "Option 1", value: "option1", primary: false },
    { label: "Option 2", value: "option2", primary: false },
  ],
  onChange: (value) => console.log(`Selected: ${value}`),
};

export const DefaultValue: Story = (args) => (
  <RadioGroup data-testId="RadioGroupWithDefault-id" {...args} />
);
DefaultValue.args = {
  groupName: "RadioGroup",
  options: [
    { label: "Option 1", value: "option1", primary: true },
    { label: "Option 2", value: "option2", primary: true },
  ],
  defaultValue: "option2",
  onChange: (value) => console.log(`Selected: ${value}`),
};

export const Small: Story = (args) => (
  <RadioGroup data-testId="RadioGroupSmall-id" {...args} />
);
Small.args = {
  groupName: "RadioGroup",
  options: [
    { label: "Option 1", value: "option1", primary: true },
    { label: "Option 2", value: "option2", primary: true },
  ],
  size: "small",
  onChange: (value) => console.log(`Selected: ${value}`),
};

export const Large: Story = (args) => (
  <RadioGroup data-testId="RadioGroupLarge-id" {...args} />
);
Large.args = {
  groupName: "RadioGroup",
  options: [
    { label: "Option 1", value: "option1", primary: true },
    { label: "Option 2", value: "option2", primary: true },
  ],
  size: "large",
  onChange: (value) => console.log(`Selected: ${value}`),
};
