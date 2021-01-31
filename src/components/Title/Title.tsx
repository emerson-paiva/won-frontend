import React from 'react'
import * as S from './Title.styles'

export type LineColors = 'primary' | 'secondary'

export type TitleProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
  lineColor?: LineColors
  size?: 'small' | 'medium' | 'huge'
}

const Title = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false,
  lineColor = 'primary',
  size = 'medium'
}: TitleProps) => (
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

export default Title
