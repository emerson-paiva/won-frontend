import Home, { HomeTemplateProps } from 'templates/Home'
import bannersMock from 'components/BannerSlider/BannerSlider.mock'
import gamesMock from 'components/GameCardSlider/GameCardSlider.mock'
import highlightMock from 'components/Highlight/Highlight.mock'

function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getStaticProps() {
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcommingGames: gamesMock,
      upcommingHighlight: highlightMock,
      upcommingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighlight: highlightMock
    }
  }
}

export default Index
