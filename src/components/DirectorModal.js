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

export default function DirectorModal({ title, data }) {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
  })
  const [buttonLabel, setButtonLabel] = useState('Save')
  const [selectedDirector, setSelectedDirector] = useState('')

  const url = 'http://localhost:3001/directors'
  const { data: directors } = useFetch(url)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setButtonLabel('Save')
    setFormData({
      first_name: '',
      last_name: '',
    })
  }

  const handleSaveOrUpdate = () => {
    let requestType = 'POST'
    let url = `http://localhost:3001/director`
    if (buttonLabel === 'Update') {
      requestType = 'PUT'
      url = `http://localhost:3001/director/${selectedDirector}`
    }
    fetch(url, {
      method: requestType,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          window.location.reload()
        } else {
          alert('Director could not be saved. Please try again')
        }
      })
      .catch((error) => {
        alert(error)
      })
  }

  const handleGetDirectorDetails = async (e) => {
    const id = e.target.value
    const url = `http://localhost:3001/director/${id}`
    let req = await fetch(url)
    let data = await req.json()
    setFormData({ first_name: data.first_name, last_name: data.last_name })
    setSelectedDirector(data._id)
    setButtonLabel('Update')
  }

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
          {title === '+ Add Director'
            ? 'Enter the following details'
            : 'Update Director'}
        </DialogTitle>
        <DialogContent>
          <Box mt={2}>
            <TextField
              fullWidth
              id='outlined-select-director'
              select
              label='Select Director to Update'
              name='director'
              value={selectedDirector}
              onChange={handleGetDirectorDetails}
            >
              {directors?.map((option) => (
                <MenuItem key={option._id} value={option._id}>
                  {option.first_name} {option.last_name}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <p>Or Add New Director</p>
          <Box mt={2}>
            <TextField
              fullWidth
              id='first-name'
              label='First Name'
              variant='outlined'
              value={formData.first_name}
              onChange={(e) =>
                setFormData({ ...formData, first_name: e.target.value })
              }
            />
          </Box>
          <Box mt={2}>
            <TextField
              fullWidth
              id='last-name'
              label='Last Name'
              variant='outlined'
              type='text'
              value={formData.last_name}
              onChange={(e) =>
                setFormData({ ...formData, last_name: e.target.value })
              }
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='error'>
            Cancel
          </Button>
          <Button onClick={handleSaveOrUpdate} autoFocus>
            {buttonLabel}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
