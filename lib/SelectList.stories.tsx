import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import SelectOption from "./SelectOption.tsx";
import SelectList from "./SelectList.tsx";

const meta = {
  title: "Select list",
  component: SelectList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof SelectList>;

export default meta;

type Story = StoryObj<typeof meta>;

const options = [
  <SelectOption key="1" isSelected>
    Option 1
  </SelectOption>,
  <SelectOption key="2">Option 2</SelectOption>,
  <SelectOption key="3" isActive>
    Option 3
  </SelectOption>,
];

export const Basic: Story = {
  args: {
    children: options,
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const Empty: Story = {
  args: {
    children: options,
    isEmpty: true,
    emptyLabel: "No options",
  },
};
