import { Grid } from '@mui/material'
import React, { useState } from 'react'
import MovieItem from '../components/MovieItem'

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      name: 'some',
      release_year: 1990,
    },
  ])
  return (
    <Grid container spacing={2} sx={{ display: 'flex' }}>
      {movies?.map((movie, index) => {
        return <MovieItem key={index}></MovieItem>
      })}
    </Grid>
  )
}

export default MovieList
