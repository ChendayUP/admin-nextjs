import type { Meta, StoryObj } from '@storybook/react';
import {
  mdiAccountMultiple,
  mdiCartOutline,
  mdiGithub
} from '@mdi/js'
import CardBoxWidget from '../../components/CardBox/Widget'
import Button from '../../components/Button'
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof CardBoxWidget> = {
  title: 'CardBox/Widget',
  component: CardBoxWidget,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded', // 'centered' | 'fullscreen' | 'padded'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {

  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Up: Story = {
  args: {
    trendLabel:"12%",
    trendType:"up",
    trendColor:"success",
    icon: mdiAccountMultiple,
    iconColor: "success",
    number: 512,
    label: "Clients",
  },
};

export const Down: Story = {
  args: {
    trendLabel:"16%",
    trendType:"down",
    trendColor:"danger",
    icon: mdiCartOutline,
    iconColor: "info",
    number: 7770,
    numberPrefix: "$",
    label: "Sales",
  },
};
