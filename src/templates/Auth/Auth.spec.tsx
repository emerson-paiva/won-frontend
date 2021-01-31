import { renderWithTheme } from 'utils/tests/helpers'
import Auth from './Auth'

describe('<Auth />', () => {
  it('should render logo, title, children', () => {
    const { getByRole, getByTestId, queryAllByLabelText } = renderWithTheme(
      <Auth title="Title">
        <span data-testid="children">Children</span>
      </Auth>
    )

    expect(getByRole('heading', { name: /title/i })).toBeInTheDocument()
    expect(getByTestId('children')).toBeInTheDocument()
    expect(getByTestId('children')).toBeInTheDocument()
    expect(queryAllByLabelText(/won games/i).length).toBe(2)
  })
})
