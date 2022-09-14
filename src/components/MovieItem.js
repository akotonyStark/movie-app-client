import React from 'react'
import poster from '../images/poster.png'
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom'

const MovieItem = ({ movie }) => {
  const navigate = useNavigate()

  const handleViewDetails = () => {
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
        <p style={{ color: 'gold' }}>{movie.name}</p>
      </Box>
    </>
  )
}

export default MovieItem
