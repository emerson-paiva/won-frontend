import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'
import GameCard from '.'

const props = {
  title: 'Among Us',
  developer: 'Indie',
  img: 'https://source.unsplash.com/user/guillaume_t/340x140',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    const { getByRole, getByLabelText } = renderWithTheme(
      <GameCard {...props} />
    )

    expect(getByRole('heading', { name: props.title })).toBeInTheDocument()

    expect(getByRole('heading', { name: props.developer })).toBeInTheDocument()

    expect(getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render price in label', () => {
    const { getByText } = renderWithTheme(<GameCard {...props} />)
    const price = getByText(props.price)

    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary })
  })

  it('should render a line-through in price when promotional', () => {
    const { getByText } = renderWithTheme(
      <GameCard {...props} promotionalPrice="R$ 150,00" />
    )
    const price = getByText(props.price)
    const promotionalPrice = getByText('R$ 150,00')

    expect(price).toHaveStyleRule('text-decoration', 'line-through')
    expect(promotionalPrice).not.toHaveStyle({ textDecoration: 'line-through' })
  })
})
