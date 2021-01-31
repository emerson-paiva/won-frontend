import { waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Email } from '@styled-icons/material-outlined'
import { renderWithTheme } from 'utils/tests/helpers'
import TextField from './TextField'

describe('<TextField />', () => {
  it('should render with Label', () => {
    const { queryByLabelText } = renderWithTheme(
      <TextField labelFor="Field" label="Label" id="Field" />
    )

    expect(queryByLabelText('Label')).toBeInTheDocument()
  })

  it('should render without Label', () => {
    const { queryByLabelText } = renderWithTheme(<TextField id="Field" />)

    expect(queryByLabelText('Label')).not.toBeInTheDocument()
  })

  it('should render with Placeholder', () => {
    const { queryByPlaceholderText } = renderWithTheme(
      <TextField placeholder="Placeholder" />
    )

    expect(queryByPlaceholderText('Placeholder')).toBeInTheDocument()
  })

  it('should render with Icon', () => {
    const { getByTestId } = renderWithTheme(
      <TextField icon={<Email data-testid="icon" />} />
    )

    expect(getByTestId('icon')).toBeInTheDocument()
  })

  it('should render with Icon at right side', () => {
    const { getByTestId } = renderWithTheme(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />
    )

    expect(getByTestId('icon').parentElement).toHaveStyle({ order: 1 })
  })

  it('should call onChange when typing value', async () => {
    const onInput = jest.fn()

    const { getByRole } = renderWithTheme(<TextField onInput={onInput} />)

    expect(onInput).not.toBeCalled()
    const input = getByRole('textbox')
    const text = 'This is my new value'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })
    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('should not changes its value when disabled', async () => {
    const onInput = jest.fn()

    const { getByRole } = renderWithTheme(
      <TextField onInput={onInput} disabled />
    )

    const input = getByRole('textbox')
    expect(input).toBeDisabled()

    const text = 'This is my new value'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })
    expect(onInput).not.toHaveBeenCalledWith(text)
  })

  it('should be accessible with tab', () => {
    const { getByRole } = renderWithTheme(<TextField />)

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(getByRole('textbox')).toHaveFocus()
  })

  it('should not be accessible with tab when disabled', () => {
    const { getByRole } = renderWithTheme(<TextField disabled />)

    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(getByRole('textbox')).not.toHaveFocus()
  })
})
