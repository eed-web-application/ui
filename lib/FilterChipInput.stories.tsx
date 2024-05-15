import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import FilterChipInput from "./FilterChipInput.tsx";
import { Input } from "./base.ts";

const meta = {
  title: "Filter chip with input",
  component: FilterChipInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof FilterChipInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Click me for input",
    children: <input className={Input} autoFocus />,
  },
};
