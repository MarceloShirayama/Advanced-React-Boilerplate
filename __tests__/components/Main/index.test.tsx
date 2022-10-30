import { render, screen } from '@testing-library/react'

import { Main } from 'src/components/Main'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)

    const heading = screen.getByRole('heading', {
      level: 1,
      name: /React Avançado!/i
    })

    expect(heading).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('Should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
