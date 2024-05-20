import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";

// Define the metadata for the component
const meta: Meta<typeof Sidebar> = {
  title: "Sidebar",
  component: Sidebar,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story, context) => {
      const { args } = context;
      const { initialPath } = args as { initialPath: string };
      return (
        <MemoryRouter initialEntries={[initialPath || "/"]}>
          <Routes>
            <Route path="*" element={<Story />} />
          </Routes>
        </MemoryRouter>
      );
    },
  ],
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

// Define stories with different active paths
export const Default: Story = {
  args: {
    initialPath: '/',
  },
};

export const ActiveHome: Story = {
  args: {
    initialPath: '/home',
  },
};

export const ActiveInventory: Story = {
  args: {
    initialPath: '/inventory',
  },
};

export const ActiveIssues: Story = {
  args: {
    initialPath: '/cwm',
  },
};

export const ActiveELogs: Story = {
  args: {
    initialPath: '/elog',
  },
};

export const Active815: Story = {
  args: {
    initialPath: '/815',
  },
};

export const ActiveAdmin: Story = {
  args: {
    initialPath: '/admin/generalAdmin',
  },
};

export const ActiveSettings: Story = {
  args: {
    initialPath: '/settings',
  },
};
