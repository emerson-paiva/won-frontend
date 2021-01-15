import { InputHTMLAttributes, useState } from 'react'
import * as S from './Checkbox.styles'

export type CheckboxProps = {
  onCheck?: (status: boolean) => void
  label?: string
  labelColor?: 'white' | 'black'
  labelFor?: string
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
  onCheck,
  label,
  labelColor = 'white',
  labelFor = '',
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(false)

  const onChange = () => {
    const status = !checked
    setChecked(status)

    if (onCheck) {
      onCheck(status)
    }
  }

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="checkbox"
        onChange={onChange}
        checked={checked}
        {...props}
      />
      {!!label && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Checkbox
