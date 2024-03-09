import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  PropsWithChildren
} from 'react'
import * as S from './Button.styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = ButtonTypes &
  PropsWithChildren<{
    size?: 'small' | 'medium' | 'large'
    fullWidth?: boolean
    icon?: React.ReactNode
    as?: React.ElementType
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
