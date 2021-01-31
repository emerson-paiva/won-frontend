import { renderWithTheme } from 'utils/tests/helpers'
import SignUp from './SignUp'

describe('<SignUp />', () => {
  it('should render the form', () => {
    const { container, getByRole, getByPlaceholderText } = renderWithTheme(
      <SignUp />
    )

    expect(getByPlaceholderText(/name/i)).toBeInTheDocument()
    expect(getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(getByPlaceholderText('Password')).toBeInTheDocument()
    expect(getByPlaceholderText('Confirm password')).toBeInTheDocument()
    expect(getByRole('button', { name: /sign up now/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render text and link to sign in', () => {
    const { getByText, getByRole } = renderWithTheme(<SignUp />)

    expect(getByRole('link', { name: /sign in/i })).toBeInTheDocument()
    expect(getByText(/already have an account\?/i)).toBeInTheDocument()
  })
})
