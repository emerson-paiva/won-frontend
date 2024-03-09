import { Meta, StoryObj } from '@storybook/react'
import { Banner, BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  argTypes: {
    ribbon: {
      type: 'string'
    }
  },
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj<BannerProps> = {}

export const WithRibbon: StoryObj<BannerProps> = {
  args: {
    ribbon: '20% OFF',
    ribbonSize: 'normal',
    ribbonColor: 'primary'
  }
}
