import { PropsWithChildren } from 'react'
import * as S from './Button.styles'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren<{
    size?: 'small' | 'medium' | 'large'
    fullWidth?: boolean
    icon?: React.ReactNode
  }>

export const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
  icon,
  ...props
}: ButtonProps) => (
  <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...props}>
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)
