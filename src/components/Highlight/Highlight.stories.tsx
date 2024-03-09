import { Meta, StoryObj } from '@storybook/react'
import mock from './__data__/mocks'
import { Highlight, HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: mock
} as Meta

export const Default: StoryObj<HighlightProps> = {}

export const WithFloatImage: StoryObj<HighlightProps> = {
  args: {
    floatImage: '/img/red-dead-float.png'
  }
}
