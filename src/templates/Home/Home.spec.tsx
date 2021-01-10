import { renderWithTheme } from 'utils/tests/helpers'
import Home from '.'

describe('<Home />', () => {
  it('should render menu and footer', () => {
    const { getByLabelText, getByRole } = renderWithTheme(<Home />)

    expect(getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(getByRole('heading', { name: /contact/i })).toBeInTheDocument()
  })

  it('should render the sections', () => {
    const { getByRole } = renderWithTheme(<Home />)

    expect(getByRole('heading', { name: /news/i })).toBeInTheDocument()
    expect(getByRole('heading', { name: /most popular/i })).toBeInTheDocument()
    expect(getByRole('heading', { name: /upcomming/i })).toBeInTheDocument()
    expect(getByRole('heading', { name: /free games/i })).toBeInTheDocument()
  })
})
