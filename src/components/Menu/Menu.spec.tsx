import { fireEvent } from '@testing-library/react'
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

  it('should handle the open/close mobile menu', () => {
    const { getByRole, getByLabelText } = renderWithTheme(<Menu />)

    // separar em passos lógicos:
    // selecionar o menu
    const fullMenuElement = getByRole('navigation', { hidden: true })

    //verificar se o menu ta escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    // clicar no botao de abrir e verificar se ele abriu
    fireEvent.click(getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    // clicar no botao de fechar o menu e veriticar se ele fechou
    fireEvent.click(getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it('should show register box when logged out', () => {
    const { getByText, queryByText, getAllByText } = renderWithTheme(<Menu />)

    expect(getAllByText(/sign in/i)).toHaveLength(2)
    expect(getByText(/sign up/i)).toBeInTheDocument()
    expect(queryByText(/my account/i)).not.toBeInTheDocument()
    expect(queryByText(/wishlist/i)).not.toBeInTheDocument()
  })

  it('should show wishlist and account when logged in', () => {
    const { getByText, queryByText } = renderWithTheme(
      <Menu username="Emerson" />
    )

    expect(getByText(/my account/i)).toBeInTheDocument()
    expect(getByText(/wishlist/i)).toBeInTheDocument()
    expect(queryByText(/sign in/i)).not.toBeInTheDocument()
    expect(queryByText(/sign up/i)).not.toBeInTheDocument()
  })
})
