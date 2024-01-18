import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Loadingbar from "./Loadingbar";

const meta: Meta<typeof Loadingbar> = {
  component: Loadingbar,
  title: "Elements/Loadingbar",
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Loadingbar>;

export const Primary: Story = (args) => (
  <Loadingbar data-testId="LoadingbarPrimary-id" {...args} />
);
Primary.args = {
  progress: 10,
  max: 100,
  min: 0,
  primary: true,
  bordered: true,
  height: 50,
  width: 100,
};

export const Secondary: Story = (args) => (
  <Loadingbar data-testId="LoadingbarSecondary-id" {...args} />
);
Secondary.args = {
  progress: 10,
  max: 100,
  min: 0,
  primary: false,
  bordered: true,
  height: 50,
  width: 100,
};

export const Bordered: Story = (args) => (
  <Loadingbar data-testId="LoadingbarBordered-id" {...args} />
);
Bordered.args = {
  progress: 10,
  max: 100,
  min: 0,
  primary: true,
  bordered: true,
  height: 50,
  width: 100,
};

export const Unbordered: Story = (args) => (
  <Loadingbar data-testId="LoadingbarUnbordered-id" {...args} />
);
Unbordered.args = {
  progress: 10,
  max: 100,
  min: 0,
  primary: true,
  bordered: false,
  height: 50,
  width: 100,
};
