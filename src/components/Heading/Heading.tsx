import * as S from './Heading.styles'

export type LineColors = 'primary' | 'secondary'

export type HeadingProps = {
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
  children: React.ReactNode
  lineColor?: LineColors
  size?: 'small' | 'medium'
}

export const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false,
  lineColor = 'primary',
  size = 'medium'
}: HeadingProps) => (
  <S.Wrapper
    color={color}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    lineColor={lineColor}
    size={size}
  >
    {children}
  </S.Wrapper>
)
