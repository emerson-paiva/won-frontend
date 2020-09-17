import { Meta, Story } from '@storybook/react/types-6-0'
import MediaMatch from '.'
import { MediaMatchProps } from './MediaMatch'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const Desktop: Story<MediaMatchProps> = (args) => (
  <MediaMatch {...args} greaterThan="medium">
    Only on desktop
  </MediaMatch>
)

export const Mobile: Story<MediaMatchProps> = (args) => (
  <MediaMatch {...args} lessThan="medium">
    Only on desktop
  </MediaMatch>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
