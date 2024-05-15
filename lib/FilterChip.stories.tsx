import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import FilterChip from "./FilterChip.tsx";

const meta = {
  title: "Filter chip",
  component: FilterChip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof FilterChip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    label: "Active",
    active: true,
    showCheck: true,
  },
};

export const Inactive: Story = {
  args: {
    label: "Inactive",
    active: false,
    showCheck: true,
  },
};

export const Dropdown: Story = {
  args: {
    label: "Dropdown",
    active: false,
    showDownArrow: true,
  },
};

export const ActiveDropdown: Story = {
  args: {
    label: "Dropdown",
    active: true,
    onDisable: fn(),
    showDownArrow: true,
  },
};
