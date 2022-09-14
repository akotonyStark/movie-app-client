import React from 'react'
import { useLocation } from 'react-router'
import useFetch from '../customHooks/useFetch'
import { Box, CircularProgress } from '@mui/material'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import poster from '../images/poster.png'
import MovieModal from '../components/MovieModal'

const MovieDetails = () => {
  const { state } = useLocation()
  const url = `http://localhost:3001/movies/${state._id}`
  const { data, isLoading, isError } = useFetch(url)

  if (isLoading) {
    return (
      <Box mt={10} sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress color='warning' />
      </Box>
    )
  }

  return (
    <Box
      mt={4}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {isError && (
        <h1 style={{ color: 'darkred' }}>Error, failed to movie details</h1>
      )}
      {data?.map((movie) => (
        <Card sx={{ maxWidth: 350, marginBottom: 5 }} key={movie._id}>
          <CardActionArea>
            <CardMedia
              component='img'
              height='250'
              image={poster}
              alt='poster'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Title: {movie.name}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Release Year: {movie.release_year}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Directed By: {movie.director.first_name}{' '}
                {movie.director.last_name}
              </Typography>
              <CardActions></CardActions>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
      <MovieModal title='Update Movie' movieData={data} />
    </Box>
  )
}

export default MovieDetails
