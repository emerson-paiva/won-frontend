import * as S from './Checkbox.styles'

export type CheckboxProps = {
  label?: string
  labelColor?: 'white' | 'black'
  labelFor?: string
  name: string
}

const Checkbox = ({
  name,
  label,
  labelColor = 'white',
  labelFor = ''
}: CheckboxProps) => (
  <S.Wrapper>
    <S.Input id={labelFor} name={name} type="checkbox" />
    {!!label && (
      <S.Label htmlFor={labelFor} labelColor={labelColor}>
        {label}
      </S.Label>
    )}
  </S.Wrapper>
)

export default Checkbox
