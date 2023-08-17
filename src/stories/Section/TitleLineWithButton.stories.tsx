import type { Meta, StoryObj } from '@storybook/react';
import {
  mdiChartTimelineVariant,
  mdiGithub
} from '@mdi/js'
import TitleLineWithButton from '../../components/Section/TitleLineWithButton';
import Button from '../../components/Button'
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof TitleLineWithButton> = {
  title: 'Section/TitleLineWithButton',
  component: TitleLineWithButton,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
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
export const Primary: Story = {
  render: (args) => (
    <TitleLineWithButton {...args}>
      <Button
        href="https://github.com/justboil/admin-one-react-tailwind"
        target="_blank"
        icon={mdiGithub}
        label="Star on GitHub"
        color="contrast"
        roundedFull
        small
      />
    </TitleLineWithButton>
  ),
  args: {
    icon: mdiChartTimelineVariant,
    title: "Overview",
    main: true,
  },
};
