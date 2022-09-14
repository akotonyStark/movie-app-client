import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'

import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import { Box } from '@mui/system'
import MenuItem from '@mui/material/MenuItem'
import useFetch from '../customHooks/useFetch'

export default function MovieModal() {
  const [open, setOpen] = useState(false)
  const [director, setDirector] = useState('')
  const url = 'http://localhost:3001/directors'
  const { data: directors } = useFetch(url)

  const handleChange = (event) => {
    setDirector(event.target.value)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSaveMovie = () => {}

  return (
    <div>
      <Button variant='contained' onClick={handleClickOpen}>
        + Add Movie
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        fullWidth
      >
        <DialogTitle id='alert-dialog-title'>
          {'Enter the following details'}
        </DialogTitle>
        <DialogContent>
          <Box mt={2}>
            <TextField
              fullWidth
              id='movie-name'
              label='Movie Name'
              variant='outlined'
            />
          </Box>
          <Box mt={2}>
            <TextField
              fullWidth
              id='realease-year'
              label='Release Year'
              variant='outlined'
              type='number'
            />
          </Box>
          <Box mt={2}>
            <TextField
              fullWidth
              id='outlined-select-director'
              select
              label='Select'
              value={director}
              onChange={handleChange}
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
          <Button onClick={handleSaveMovie} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
