import { Meta, Story } from '@storybook/react/types-6-0'
import Checkbox, { CheckboxProps } from './Checkbox'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta

export const Default: Story<CheckboxProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Checkbox {...args} isChecked label="Action" />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox {...args} label="Adventure" />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox {...args} label="Strategy" />
    </div>
  </>
)
