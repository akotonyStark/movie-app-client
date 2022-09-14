import React from 'react'
import Box from '@mui/material/Box'
import { NavLink } from 'react-router-dom'
// import { Button } from '@mui/material'

const NavHeader = () => {
  return (
    <Box
      sx={{
        height: 50,
        backgroundColor: '#333',
        padding: 2,
      }}
    >
      <NavLink
        to='/'
        style={{ fontSize: 40, color: 'gold', textDecoration: 'none' }}
      >
        MovieApp
      </NavLink>
    </Box>
  )
}

export default NavHeader
