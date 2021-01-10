import { Meta, Story } from '@storybook/react/types-6-0'
import GameCard, { GameCardProps } from '.'
import item from './GameCard.mock'

export default {
  title: 'GameCard',
  component: GameCard,
  args: { ...item },
  argTypes: {
    onFav: { action: 'clicked' }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)
