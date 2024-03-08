import * as S from './Heading.styles'

export type HeadingProps = {
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
  children: React.ReactNode
}

export const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false
}: HeadingProps) => (
  <S.Wrapper color={color} lineLeft={lineLeft} lineBottom={lineBottom}>
    {children}
  </S.Wrapper>
)
