import { renderWithTheme } from 'utils/tests/helpers'
import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    const { getByRole, getByText, getByLabelText } = renderWithTheme(
      <Checkbox label="Checkbox Label" labelFor="check" name="checkbox" />
    )

    expect(getByRole('checkbox')).toBeInTheDocument()
    expect(getByLabelText(/checkbox label/i)).toBeInTheDocument()
    expect(getByText(/checkbox label/i)).toHaveAttribute('for', 'check')
  })

  it('should render without label', () => {
    const { queryByLabelText } = renderWithTheme(<Checkbox name="checkbox" />)

    expect(queryByLabelText(/checkbox label/i)).not.toBeInTheDocument()
  })

  it('should render with black label', () => {
    const { getByText } = renderWithTheme(
      <Checkbox label="checkbox label" name="checkbox" labelColor="black" />
    )

    expect(getByText(/checkbox label/i)).toHaveStyle({ color: '#030517' })
  })
})
