import { Meta, Story } from '@storybook/react/types-6-0'
import SignIn from './SignIn'

export default {
  title: 'Form/SignIn',
  component: SignIn
} as Meta

export const Default: Story = (args) => (
  <div style={{ width: '30rem', margin: 'auto' }}>
    <SignIn {...args} />
  </div>
)
