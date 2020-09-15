import { render } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container, getByRole } = render(<Main />)

    expect(getByRole('heading', { name: /react avançado/i }))
    expect(container.firstChild).toMatchSnapshot()
  })
})
