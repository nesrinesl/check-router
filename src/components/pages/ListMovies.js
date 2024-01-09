import React from 'react'
import MovieList from '../MovieList/MovieList'

const ListMovies = ({ movies, inputSearch, newRate }) => {
  return (
    <div><MovieList movies={movies} inputSearch={inputSearch} newRate={newRate} /></div>
  )
}

export default ListMovies