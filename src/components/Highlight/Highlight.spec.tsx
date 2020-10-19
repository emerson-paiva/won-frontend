import { renderWithTheme } from 'utils/tests/helpers'
import Highlight from '.'

const props = {
  title: 'Heading 1',
  subTitle: 'Heading 2',
  backgroundImage: '/img/red-dead-img.jpg',
  buttonLabel: 'Buy now',
  buttonLink: '/rdr2'
}

describe('<Highlight />', () => {
  it('should render the heading and button', () => {
    const { getByRole } = renderWithTheme(<Highlight {...props} />)

    expect(getByRole('heading', { name: /Heading 1/i })).toBeInTheDocument()

    expect(getByRole('heading', { name: /Heading 2/i })).toBeInTheDocument()

    expect(getByRole('link', { name: /Buy now/i })).toBeInTheDocument()
  })

  it('should render background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    })
  })
})
