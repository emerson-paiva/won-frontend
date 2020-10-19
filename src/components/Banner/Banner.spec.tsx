import { screen } from '@testing-library/react'
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

  it('should render a Ribbon', () => {
    renderWithTheme(
      <Banner
        {...props}
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/My Ribbon/i)

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
