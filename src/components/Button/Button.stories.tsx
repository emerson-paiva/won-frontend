import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '.'
import { MdOutlineAddShoppingCart } from 'react-icons/md'

export default {
  title: 'Button',
  component: Button
} as Meta

export const Default: StoryObj<ButtonProps> = {
  args: {
    children: 'Buy now'
  }
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: 'Buy now',
    icon: <MdOutlineAddShoppingCart />
  }
}

export const AsLink: StoryObj<ButtonProps> = {
  args: {
    size: 'large',
    children: 'Buy now',
    as: 'a',
    href: '/link'
  }
}
