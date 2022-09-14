import React from 'react'
import Box from '@mui/material/Box'
import { Button } from '@mui/material'

const NavHeader = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 80,
        backgroundColor: '#333',
        padding: 2,
        color: 'darkred',
      }}
    >
      <h1>MovieApp</h1>
    </Box>
  )
}

export default NavHeader
