import React from 'react'
import * as S from './Title.styles'

export type TitleProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
}

const Title = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false
}: TitleProps) => (
  <S.Wrapper color={color} lineLeft={lineLeft} lineBottom={lineBottom}>
    {children}
  </S.Wrapper>
)

export default Title
