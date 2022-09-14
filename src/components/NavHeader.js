import React from 'react'
import Box from '@mui/material/Box'
import { NavLink } from 'react-router-dom'
import MovieModal from './MovieModal'
import logo from '../images/logo.png'

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
        style={{ fontSize: 30, color: 'darkred', textDecoration: 'none' }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <img src={logo} alt='logo' style={{ width: 60, height: 40 }} />
          <span className='AppName'>Fake Netflix</span>
        </div>
      </NavLink>

      <MovieModal title='+ Add Movie' />
    </Box>
  )
}

export default NavHeader
