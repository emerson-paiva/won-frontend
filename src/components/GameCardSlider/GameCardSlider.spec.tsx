import 'match-media-mock'
import { renderWithTheme } from 'utils/tests/helpers'
import GameCardSlider from '.'

const items = [
  {
    title: 'Population Zero 1',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero 2',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x141',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero 3',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x142',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  }
]

describe('<GameCardSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />)

    expect(container.querySelectorAll('.slick-active')).toHaveLength(3)
  })

  // it('should render white arrows if color passed', () => {
  //   const { getByLabelText } = renderWithTheme(
  //     <GameCardSlider items={items} color="white" />
  //   )

  //   expect(getByLabelText(/previous games/i)).toHaveStyle({
  //     color: '#FAFAFA'
  //   })
  //   expect(getByLabelText(/next games/i)).toHaveStyle({
  //     color: '#FAFAFA'
  //   })
  // })
})
