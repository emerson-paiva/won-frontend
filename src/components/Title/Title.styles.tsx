import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { TitleProps, LineColors } from './Title'

const wrapperModifiers = {
  lineLeft: (theme: DefaultTheme, lineColor: LineColors) => css`
    border-left: 0.7rem solid ${theme.colors[lineColor]};
    padding-left: ${theme.spacings.xxsmall};
  `,
  lineBottom: (theme: DefaultTheme, lineColor: LineColors) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -1rem;
      width: 5rem;
      border-bottom: 0.4rem solid ${theme.colors[lineColor]};
    }
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};

    &::after {
      width: 3rem;
    }
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `
}

export const Wrapper = styled.h2<TitleProps>`
  ${({ theme, color, lineLeft, lineBottom, lineColor, size }) => css`
    color: ${theme.colors[color!]};
    font-size: ${theme.font.sizes.xlarge};

    ${lineLeft && wrapperModifiers.lineLeft(theme, lineColor!)}
    ${lineBottom && wrapperModifiers.lineBottom(theme, lineColor!)}
    ${!!size && wrapperModifiers[size](theme)}
  `}
`
