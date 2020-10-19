import { renderWithTheme } from 'utils/tests/helpers'
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
})
