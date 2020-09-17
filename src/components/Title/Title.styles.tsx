import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { TitleProps } from './Title'

const wrapperModifiers = {
  lineLeft: (theme: DefaultTheme) => css`
    border-left: 0.7rem solid ${theme.colors.secondary};
    padding-left: ${theme.spacings.xxsmall};
  `,
  lineBottom: (theme: DefaultTheme) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -1rem;
      width: 5rem;
      border-bottom: 0.4rem solid ${theme.colors.primary};
    }
  `
}

export const Wrapper = styled.h2<TitleProps>`
  ${({ theme, color, lineLeft, lineBottom }) => css`
    color: ${theme.colors[color!]};
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}

    ${lineLeft && wrapperModifiers.lineLeft(theme)}
    ${lineBottom && wrapperModifiers.lineBottom(theme)}
  `}
`
