import Button from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { getByRole } = renderWithTheme(<Button>Buy now</Button>)

    expect(getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })
  })

  it('should render the small size', () => {
    const { getByRole } = renderWithTheme(<Button size="small">Buy now</Button>)

    expect(getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size', () => {
    const { getByRole } = renderWithTheme(<Button size="large">Buy now</Button>)

    expect(getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '5rem',
      'font-size': '1.6rem',
      padding: '0.8rem 4.8rem'
    })
  })

  it('should render a fullWidth version', () => {
    const { getByRole } = renderWithTheme(<Button fullWidth>Buy now</Button>)

    expect(getByRole('button', { name: /Buy now/i })).toHaveStyle({
      width: '100%'
    })
  })
})
