import { Meta, Story } from '@storybook/react/types-6-0'
import Radio, { RadioProps } from './Radio'

export default {
  title: 'Radio',
  component: Radio,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta

export const Default: Story<RadioProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Radio
        label="primeiro"
        labelFor="primeiro"
        id="primeiro"
        name="nome"
        value="primeiro"
        defaultChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        label="segundo"
        labelFor="segundo"
        id="segundo"
        name="nome"
        value="segundo"
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        label="terceiro"
        labelFor="terceiro"
        id="terceiro"
        name="nome"
        value="terceiro"
        {...args}
      />
    </div>
  </>
)
