import { renderWithTheme } from 'utils/tests/helpers'
import Auth from './Auth'

describe('<Auth />', () => {
  it('should render logo, title, children', () => {
    const { getByRole, getByTestId, queryAllByLabelText } = renderWithTheme(
      <Auth title="Auth Title">
        <span data-testid="children">Children</span>
      </Auth>
    )

    expect(
      getByRole('heading', { name: /all your favorite games in one place/i })
    ).toBeInTheDocument()

    expect(
      getByRole('heading', {
        name: /won is the best and most complete gaming plataform./i
      })
    ).toBeInTheDocument()

    expect(getByRole('heading', { name: /auth title/i })).toBeInTheDocument()

    expect(getByTestId('children')).toBeInTheDocument()

    expect(queryAllByLabelText(/won games/i).length).toBe(2)
  })
})
