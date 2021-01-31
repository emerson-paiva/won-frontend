import { Meta, Story } from '@storybook/react/types-6-0'
import SignUp from './SignUp'

export default {
  title: 'Form/SignUp',
  component: SignUp
} as Meta

export const Default: Story = (args) => (
  <div style={{ width: '30rem', margin: 'auto' }}>
    <SignUp {...args} />
  </div>
)
