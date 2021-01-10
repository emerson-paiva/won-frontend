import 'match-media-mock'
import { renderWithTheme } from 'utils/tests/helpers'
import bannersMock from 'components/BannerSlider/BannerSlider.mock'
import gamesMock from 'components/GameCardSlider/GameCardSlider.mock'
import highlightMock from 'components/Highlight/Highlight.mock'

import Home from '.'

const props = {
  banners: bannersMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcommingGames: [gamesMock[0]],
  upcommingHighlight: highlightMock,
  upcommingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeHighlight: highlightMock
}

describe('<Home />', () => {
  it('should render Home page', () => {
    const { getByLabelText, getByRole, getAllByText } = renderWithTheme(
      <Home {...props} />
    )

    expect(getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(getByRole('heading', { name: /contact/i })).toBeInTheDocument()

    expect(getByRole('heading', { name: /news/i })).toBeInTheDocument()
    expect(getByRole('heading', { name: /most popular/i })).toBeInTheDocument()
    expect(getByRole('heading', { name: /upcomming/i })).toBeInTheDocument()
    expect(getByRole('heading', { name: /free games/i })).toBeInTheDocument()

    // banner
    expect(getAllByText(/defy death 1/i)).toHaveLength(1)

    // card game
    expect(getAllByText(/population zero/i)).toHaveLength(5)

    // highlight
    expect(getAllByText(/red dead it's back/i)).toHaveLength(3)
  })
})
