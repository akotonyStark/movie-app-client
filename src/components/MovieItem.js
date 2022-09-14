import React from 'react'
import poster from '../images/poster.png'
import Box from '@mui/material/Box'

const MovieItem = ({ movie }) => {
  return (
    <>
      <Box mt={4} className='movie'>
        <img
          className='poster'
          style={{ width: 'auto', height: 250 }}
          src={poster}
          alt='poster'
        />

        <p>{movie.name}</p>
        <h5 style={{ color: 'gold', margin: '7px  0' }}>
          Year: {movie.release_year}
        </h5>
      </Box>
    </>
  )
}

export default MovieItem
