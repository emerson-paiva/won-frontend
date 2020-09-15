import { Meta, Story } from '@storybook/react/types-6-0'
import Logo from '.'
import { LogoProps } from './Logo'

export default {
  title: 'Logo',
  component: Logo
} as Meta

export const Basic: Story<LogoProps> = (args) => <Logo {...args} />
