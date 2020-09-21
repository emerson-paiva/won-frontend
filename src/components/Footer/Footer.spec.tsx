import { renderWithTheme } from 'utils/tests/helpers'
import Footer from '.'

describe('<Footer />', () => {
  it('should render 4 columns topics', () => {
    const { container, getByRole } = renderWithTheme(<Footer />)

    expect(getByRole('heading', { name: /contact/i })).toBeInTheDocument()
    expect(getByRole('heading', { name: /follow us/i })).toBeInTheDocument()
    expect(getByRole('heading', { name: /links/i })).toBeInTheDocument()
    expect(getByRole('heading', { name: /location/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
