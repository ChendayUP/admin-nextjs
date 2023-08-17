import type { Meta, StoryObj } from '@storybook/react'
import { mdiChartTimelineVariant, mdiGithub } from '@mdi/js'
import Line from '../../components/ECharts/Line'
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Line> = {
  title: 'ECharts/Line',
  component: Line,
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
      <Line {...args}></Line>
    </div>
  ),
  args: {
    title: '大体积测温',
    data: [
      {
        "name": "Z01", 
        "data": [
          {"time": "2023-08-17 13:55:12", "value": 65},
          {"time": "2023-08-17 18:46:51", "value": 92.34},
          {"time": "2023-08-18 03:23:11", "value": 32},  
          {"time": "2023-08-18 09:58:07", "value": 63},
          {"time": "2023-08-18 17:41:09", "value": 22.34},
          {"time": "2023-08-18 22:15:20", "value": 25},
          {"time": "2023-08-19 11:24:48", "value": 34},  
          {"time": "2023-08-19 15:47:33", "value": 78},
          {"time": "2023-08-20 06:37:29", "value": 79},
          {"time": "2023-08-20 09:12:54", "value": 88},
        ]
      },
      {
        "name": "Z02", 
        "data": [
          {"time": "2023-08-17 09:41:33", "value": 83},
          {"time": "2023-08-18 07:15:22", "value": 54},
          {"time": "2023-08-18 16:52:17", "value": 16},
          {"time": "2023-08-18 20:14:39", "value": 67},
          {"time": "2023-08-19 01:32:11", "value": 75},
          {"time": "2023-08-19 04:41:06", "value": 70},
          {"time": "2023-08-19 12:32:55", "value": 5},
          {"time": "2023-08-20 13:33:28", "value": 25},
          {"time": "2023-08-20 23:55:44", "value": 16},
        ]
      },
      {
        "name": "H01",
        "data": [
          {"time": "2023-08-18 09:41:20", "value": 25},
          {"time": "2023-08-18 16:32:11", "value": 32},
          {"time": "2023-08-19 21:15:47", "value": 78},
          {"time": "2023-08-20 12:55:36", "value": 88},
          // ...
        ]
      },
      {
        "name": "H02",
        "data": [
          {"time": "2023-08-18 09:41:20", "value": 25},
        ]
      },
      {
        "name": "H03",
        "data": [
          {"time": "2023-08-18 09:41:20", "value": 25},
        ]
      },
      {
        "name": "H03",
        "data": [
          {"time": "2023-08-18 09:41:20", "value": 25},
        ]
      },
      {
        "name": "H05",
        "data": [
          {"time": "2023-08-18 09:41:20", "value": 25},
        ]
      },
      {
        "name": "H06",
        "data": [
          {"time": "2023-08-18 09:41:20", "value": 25},
        ]
      },
      {
        "name": "H07",
        "data": [
          {"time": "2023-08-18 09:41:20", "value": 25},
        ]
      },

    ]
  },
}
