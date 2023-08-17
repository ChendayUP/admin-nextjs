import type { Meta, StoryObj } from '@storybook/react'
import { mdiChartTimelineVariant, mdiGithub } from '@mdi/js'
import NoDataPie from '../../components/ECharts/NoDataPie'
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof NoDataPie> = {
  title: 'ECharts/NoDataPie',
  component: NoDataPie,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
  render: (args) => (
    <div style={{width: '400px', height: '220px'}}>
      <NoDataPie {...args}></NoDataPie>
    </div>
  ),
  args: {
    title: '临边防护',
  },
}
