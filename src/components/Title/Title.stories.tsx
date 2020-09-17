import { Meta, Story } from '@storybook/react/types-6-0'
import Title, { TitleProps } from './Title'

export default {
  title: 'Title',
  component: Title,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<TitleProps> = (args) => <Title {...args} />

Default.args = {
  children: 'Most Populars'
}
