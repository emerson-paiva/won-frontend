import { fireEvent } from '@testing-library/react'
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

  it('should render a filled Favorite icon when favorite is true', () => {
    const { getByLabelText } = renderWithTheme(<GameCard {...props} favorite />)

    expect(getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    const { getByLabelText, getAllByRole } = renderWithTheme(
      <GameCard {...props} favorite onFav={onFav} />
    )

    fireEvent.click(getAllByRole('button')[0])

    expect(onFav).toBeCalled()

    expect(getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should render a Ribbon', () => {
    const { getByText } = renderWithTheme(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = getByText(/My Ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({
      backgroundColor: '#3cd3c1'
    })
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
