import { Grid } from '@mui/material'
import React, { useState } from 'react'
import MovieItem from '../components/MovieItem'
import useFetch from '../customHooks/useFetch'

const MovieList = () => {
  const url = 'http://localhost:3001/movies'
  const { data, isLoading, isError } = useFetch(url)
  console.log(data)
  const [movies, setMovies] = useState([])
  return (
    <Grid container spacing={2} sx={{ display: 'flex' }}>
      {movies?.map((movie, index) => {
        return <MovieItem key={index}></MovieItem>
      })}
    </Grid>
  )
}

export default MovieList
