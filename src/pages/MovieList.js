import { Grid, Box, CircularProgress } from '@mui/material'
import React from 'react'
import MovieItem from '../components/MovieItem'
import useFetch from '../customHooks/useFetch'

const MovieList = () => {
  const url = 'http://localhost:3001/movies'
  const { data: movies, isLoading, isError } = useFetch(url)
  console.log(movies)

  if (isLoading) {
    return (
      <Box mt={10} sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress color='warning' />
      </Box>
    )
  }

  return (
    <Grid container spacing={2} sx={{ display: 'flex' }}>
      {isError && (
        <h1 style={{ color: 'darkred' }}>
          Error, failed to load data from API
        </h1>
      )}
      {movies?.map((movie, index) => {
        return <MovieItem key={index} movie={movie}></MovieItem>
      })}
    </Grid>
  )
}

export default MovieList
