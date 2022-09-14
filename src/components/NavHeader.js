import React from 'react'
import Box from '@mui/material/Box'
import { NavLink } from 'react-router-dom'
import MovieModal from './MovieModal'

const NavHeader = () => {
  return (
    <Box
      sx={{
        height: 50,
        backgroundColor: '#333',
        padding: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <NavLink
        to='/'
        style={{ fontSize: 30, color: 'gold', textDecoration: 'none' }}
      >
        MovieApp
      </NavLink>

      <MovieModal />
    </Box>
  )
}

export default NavHeader
