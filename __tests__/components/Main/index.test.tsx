import { render, screen } from '@testing-library/react'

import { Main } from 'src/components/Main'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)

    const heading = screen.getByRole('heading', {
      level: 1,
      name: /Welcome to React Avançado!/i
    })

    expect(heading).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
