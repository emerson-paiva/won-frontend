import Button from 'components/Button'
import { renderWithTheme } from 'utils/tests/helpers'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container, getByRole } = renderWithTheme(<Button>Buy now</Button>)

    expect(getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })
    expect(container.firstChild).toMatchSnapshot()
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

  it('should render an icon version', () => {
    const { getByTestId, getByText } = renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy now</Button>
    )

    expect(getByText(/buy now/i)).toBeInTheDocument()
    expect(getByTestId('icon')).toBeInTheDocument()
  })

  it('should render a minimal version', () => {
    const { getByRole } = renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />} minimal>
        Buy now
      </Button>
    )

    expect(getByRole('button', { name: /buy now/i })).toHaveStyle({
      background: 'none',
      color: '#f231a5'
    })
    expect(getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'background',
      'none',
      {
        modifier: ':hover'
      }
    )
  })

  it('should render Button as a link', () => {
    const { getByRole } = renderWithTheme(
      <Button as="a" href="/link">
        Buy now
      </Button>
    )

    expect(getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
