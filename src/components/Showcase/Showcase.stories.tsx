import { Meta, Story } from '@storybook/react/types-6-0'
import GameCardSliderMock from 'components/GameCardSlider/GameCardSlider.mock'
import HighlightMock from 'components/Highlight/Highlight.mock'
import Showcase, { ShowcaseProps } from './Showcase'

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    background: {
      default: 'dark'
    },
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<ShowcaseProps> = (args) => <Showcase {...args} />

Default.args = {
  title: 'Most Popular',
  highlight: HighlightMock,
  games: GameCardSliderMock
}

export const WithoutHighlight: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

WithoutHighlight.args = {
  title: 'Most Popular',
  games: GameCardSliderMock
}

export const WithoutGames: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

WithoutGames.args = {
  title: 'Most Popular',
  highlight: HighlightMock
}
