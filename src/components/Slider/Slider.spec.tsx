import 'match-media-mock'
import { render } from '@testing-library/react'
import Slider from '.'

describe('<Slider />', () => {
  it('should render children as slider item', () => {
    const { getByText } = render(
      <Slider settings={{ slidesToShow: 1, infinite: false }}>
        <p>Item 1</p>
        <p>Item 2</p>
      </Slider>
    )

    expect(getByText(/item 1/i).parentElement?.parentElement).toHaveClass(
      'slick-slide'
    )
    expect(getByText(/item 2/i).parentElement?.parentElement).toHaveClass(
      'slick-slide'
    )
  })
})
