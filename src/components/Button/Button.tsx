import { PropsWithChildren } from 'react'
import * as S from './Button.styles'

export type ButtonProps = PropsWithChildren<{
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
}>

export const Button = ({
  children,
  size = 'medium',
  fullWidth = false
}: ButtonProps) => (
  <S.Wrapper size={size} fullWidth={fullWidth}>
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)
