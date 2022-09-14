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
      <Box
        mt={4}
        ml={2}
        className='movie'
        onClick={handleViewDetails}
        title='Click to view details'
      >
        <img
          className='poster'
          style={{ width: '100%', height: 250 }}
          src={poster}
          alt='poster'
        />
        <p style={{ color: 'gold' }}>{movie.name}</p>
      </Box>
    </>
  )
}

export default MovieItem
