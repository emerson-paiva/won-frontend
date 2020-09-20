import { renderWithTheme } from 'utils/tests/helpers'
import Menu from 'components/Menu'

describe('<Menu />', () => {
  it('should render the menu', () => {
    const { getByLabelText, getByRole } = renderWithTheme(<Menu />)

    expect(getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(getByLabelText(/search/i)).toBeInTheDocument()
    expect(getByLabelText(/open shopping cart/i)).toBeInTheDocument()
    expect(getByRole('img', { name: /won games/i })).toBeInTheDocument()
  })
})
