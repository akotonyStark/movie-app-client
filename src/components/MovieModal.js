import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'

import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import { Box } from '@mui/system'
import MenuItem from '@mui/material/MenuItem'
import useFetch from '../customHooks/useFetch'

export default function MovieModal({ title, movieData }) {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    release_year: '',
    director: '',
  })
  const url = 'http://localhost:3001/directors'
  const { data: directors } = useFetch(url)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSaveOrUpdate = (e) => {
    if (e.target.textContent === 'Save') {
      fetch(`http://localhost:3001/movie`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (response.ok) {
            window.location.replace('/')
          } else {
            alert('Movie could not be saved. Please try again')
          }
        })
        .catch((error) => {
          alert(error)
        })
    } else {
      fetch(`http://localhost:3001/movie/${movieData[0]._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (response.ok) {
            window.location.reload()
          } else {
            alert('Movie could not be updated. Please try again')
          }
        })
        .catch((error) => {
          alert(error)
        })
    }
  }

  useEffect(() => {
    if (title === 'Click to Update Movie') {
      setFormData({
        name: movieData[0]?.name,
        release_year: movieData[0]?.release_year,
        director: movieData[0]?.director,
      })
    }
  }, [title, movieData])

  return (
    <div>
      <Button
        variant='contained'
        onClick={handleClickOpen}
        data-testid='button-label'
      >
        {title}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        fullWidth
      >
        <DialogTitle id='alert-dialog-title'>
          {title === '+ Add Movie'
            ? 'Enter the following details'
            : 'Update Movie'}
        </DialogTitle>
        <DialogContent>
          <Box mt={2}>
            <TextField
              fullWidth
              id='movie-name'
              label='Movie Name'
              variant='outlined'
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </Box>
          <Box mt={2}>
            <TextField
              fullWidth
              id='realease-year'
              label='Release Year'
              variant='outlined'
              type='number'
              value={formData.release_year}
              onChange={(e) =>
                setFormData({ ...formData, release_year: e.target.value })
              }
            />
          </Box>
          <Box mt={2}>
            <TextField
              fullWidth
              id='outlined-select-director'
              select
              label='Select'
              value={formData.director}
              onChange={(e) =>
                setFormData({ ...formData, director: e.target.value })
              }
            >
              {directors?.map((option) => (
                <MenuItem key={option._id} value={option._id}>
                  {option.first_name} {option.last_name}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='error'>
            Cancel
          </Button>
          <Button onClick={handleSaveOrUpdate} autoFocus>
            {title === 'Click to Update Movie' ? 'Update' : 'Save'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
