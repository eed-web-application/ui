import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Select from "./Select.tsx";

const meta = {
  title: "Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    setValue: fn(),
    onSearchChange: fn(),
  },
} satisfies Meta<typeof Select>;

export default meta;

const options = ["Option 1", "Option 2", "Option 3"];

type Story = StoryObj<typeof meta>;

export const Unselected: Story = {
  args: {
    options,
    value: null,
    placeholder: "Select an option",
  },
};

export const Selected: Story = {
  args: {
    options,
    value: "Option 1",
  },
};

export const Disabled: Story = {
  args: {
    options,
    value: null,
    disabled: true,
    placeholder: "Disabled",
  },
};

export const Invalid: Story = {
  args: {
    options,
    value: null,
    invalid: true,
  },
};

export const OptionsLoading: Story = {
  args: {
    options,
    value: null,
    isLoading: true,
  },
};

export const Nonsearchable: Story = {
  args: {
    options,
    value: "Option 1",
    nonsearchable: true,
    // FIXME: There is a bug where if the select is nonsearchable, the input
    // will not have width.
    className: "w-48",
  },
};

export const DifferentLabelsAndValues: Story = {
  args: {
    options: [
      { label: "Duplicate Option", value: "1" },
      { label: "Duplicate Option", value: "2" },
      { label: "Option 3", value: "3" },
    ],
    value: "1",
  },
};
