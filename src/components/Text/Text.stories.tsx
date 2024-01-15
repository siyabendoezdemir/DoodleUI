import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";
import { TextType } from "./Text.types";

const meta: Meta<typeof Text> = {
  component: Text,
  title: "Elements/Text",
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: {
        type: "select",
        options: Object.values(TextType),
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Heading: Story = (args) => <Text {...args} />;
Heading.args = {
  type: TextType.H1,
  text: "Heading",
};

export const Paragraph: Story = (args) => <Text {...args} />;
Paragraph.args = {
  type: TextType.Paragraph,
  text: "This is a paragraph.",
};

export const Span: Story = (args) => <Text {...args} />;
Span.args = {
  type: TextType.Span,
  text: "Span",
};