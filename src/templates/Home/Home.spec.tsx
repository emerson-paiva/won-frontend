import { render } from '@testing-library/react'
import Home from '.'

describe('<Home />', () => {
  it('should render the heading', () => {
    const { container, getByRole } = render(<Home />)

    expect(getByRole('heading', { name: /Home/i }))
    expect(container.firstChild).toMatchSnapshot()
  })
})
