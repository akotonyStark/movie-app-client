import React from 'react'
import { useLocation } from 'react-router'

const MovieDetails = () => {
  const { state } = useLocation()
  return <div>{state.name}</div>
}

export default MovieDetails
