import { renderWithTheme } from 'utils/tests/helpers'
import SignIn from './SignIn'

describe('<SignIn />', () => {
  it('should render the form', () => {
    const { container, getByPlaceholderText, getByRole } = renderWithTheme(
      <SignIn />
    )

    expect(getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(getByPlaceholderText(/password/i)).toBeInTheDocument()
    expect(getByRole('button', { name: /sign in now/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the forgot password link', () => {
    const { getByRole } = renderWithTheme(<SignIn />)

    expect(
      getByRole('link', { name: /Forgot your password?/i })
    ).toBeInTheDocument()
  })

  it('should render the text and link to sign up', () => {
    const { getByRole, getByText } = renderWithTheme(<SignIn />)

    expect(getByText(/don’t have an account\?/i)).toBeInTheDocument()
    expect(getByRole('link', { name: /sign up?/i })).toBeInTheDocument()
  })
})
