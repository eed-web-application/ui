import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import SelectOption from "./SelectOption.tsx";

const meta = {
  title: "Select option",
  component: SelectOption,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof SelectOption>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: "Option",
  },
};

export const Active: Story = {
  args: {
    children: "Active",
    isActive: true,
  },
};

export const Selected: Story = {
  args: {
    children: "Selected",
    isSelected: true,
  },
};

export const ActiveAndSelected: Story = {
  args: {
    children: "Active and selected",
    isActive: true,
    isSelected: true,
  },
};
