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
