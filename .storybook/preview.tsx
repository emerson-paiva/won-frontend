import React from 'react'
import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'
import { ThemeProvider } from 'styled-components'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
