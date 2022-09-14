import React from 'react'
import poster from '../images/poster.png'
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom'

const MovieItem = ({ movie }) => {
  const navigate = useNavigate()

  const handleViewDetails = () => {
    console.log('asdsad')
    navigate('/details', { state: movie })
  }
  return (
    <>
      <Box mt={4} className='movie' onClick={handleViewDetails}>
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
