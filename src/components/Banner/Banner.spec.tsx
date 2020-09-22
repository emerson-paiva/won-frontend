import { renderWithTheme } from 'utils/tests/helpers'
import Banner from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('should render the heading', () => {
    const { container, getByRole } = renderWithTheme(<Banner {...props} />)

    expect(getByRole('heading', { name: /defy death/i })).toBeInTheDocument()
    expect(
      getByRole('heading', { name: /Play the new CrashLands season/i })
    ).toBeInTheDocument()
    expect(getByRole('img', { name: /defy death/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
