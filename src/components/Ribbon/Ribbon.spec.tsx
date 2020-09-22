import { renderWithTheme } from 'utils/tests/helpers'
import Ribbon from 'components/Ribbon'

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    const { container, getByText } = renderWithTheme(
      <Ribbon>Best Seller</Ribbon>
    )

    expect(getByText(/Best Seller/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with the primary color', () => {
    const { getByText } = renderWithTheme(<Ribbon>Best Seller</Ribbon>)

    expect(getByText(/Best Seller/i)).toHaveStyle({
      backgroundColor: '#F231A5'
    })
  })

  it('should render with the secondary color', () => {
    const { getByText } = renderWithTheme(
      <Ribbon color="secondary">Best Seller</Ribbon>
    )

    expect(getByText(/Best Seller/i)).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })

  it('should render with the normal size as default', () => {
    const { getByText } = renderWithTheme(<Ribbon>Best Seller</Ribbon>)

    expect(getByText(/Best Seller/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem'
    })
  })

  it('should render with the small size ', () => {
    const { getByText } = renderWithTheme(
      <Ribbon size="small">Best Seller</Ribbon>
    )

    expect(getByText(/Best Seller/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
