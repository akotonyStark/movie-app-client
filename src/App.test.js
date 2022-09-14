import { render, fireEvent } from '@testing-library/react'
import DirectorModal from './components/DirectorModal'
import MovieModal from './components/MovieModal'

describe(MovieModal, () => {
  const movie = {
    _id: '6320d984594102459bc202c9',
    name: 'Pulp Fiction',
    release_year: 1994,
    director: '6320d6ea26020fcafe0c8d1f',
  }
  it('If it renders appropriate button title', () => {
    const { getByTestId } = render(
      <MovieModal movie={movie} title='+ Add Movie' />
    )
    const buttonLabel = getByTestId('button-label').textContent
    expect(buttonLabel).toEqual('+ Add Movie')
  })

  it('If it renders the Director Component', () => {
    const { getByTestId } = render(<DirectorModal title='+ Add Director' />)
    const buttonLabel = getByTestId('button-label').textContent
    expect(buttonLabel).toEqual('+ Add Director')
  })
})
