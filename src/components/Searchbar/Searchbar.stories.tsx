import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Searchbar from "./Searchbar";

const meta: Meta<typeof Searchbar> = {
  component: Searchbar,
  title: "Components/Searchbar",
  tags: ["autodocs"],
  argTypes: {
    onSearch: { action: "searched" },
    onChange: { action: "inputChanged" },
    onAutoCompleteSelect: { action: "autoCompleteOptionSelected" },
  },
};
export default meta;

type Story = StoryObj<typeof Searchbar>;

export const Default: Story = (args) => (
  <Searchbar data-testId="SearchbarDefault-id" {...args} />
);
Default.args = {
  width: 300,
  height: 50,
  searchButtonSize: "2xl",
  placeholderText: "Search...",
  searchButtonLabel: "Search",
  clearButton: true,
};

export const WithDefaultValue: Story = (args) => (
  <Searchbar data-testId="SearchbarWithDefaultValue-id" {...args} />
);
WithDefaultValue.args = {
  width: 300,
  height: 50,
  searchButtonSize: "2xl",
  defaultValue: "Initial Search",
  searchButtonLabel: "Search",
  clearButton: true,
};

export const Disabled: Story = (args) => (
  <Searchbar data-testId="SearchbarDisabled-id" {...args} />
);
Disabled.args = {
  width: 300,
  height: 50,
  searchButtonSize: "2xl",
  placeholderText: "Search...",
  searchButtonLabel: "Search",
  clearButton: true,
  disabled: true,
};

export const WithAutoComplete: Story = (args) => (
  <Searchbar data-testId="SearchbarWithAutoComplete-id" {...args} />
);
WithAutoComplete.args = {
  width: 300,
  height: 50,
  searchButtonSize: "2xl",
  placeholderText: "Search...",
  searchButtonLabel: "Search",
  clearButton: true,
  autoCompleteOptions: [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
  ],
};
