import { useState } from "react";
import "./App.css";
import { moviesData } from "./Data";
import Navigation from "./components/Navigtion/Navigation";
import AddMovie from "./components/AddMovie/AddMovie";
import FilterMovie from "./components/FilterMovie/FilterMovie";
import { Route, Routes, useNavigate } from "react-router-dom";
import MovieDetails from "./components/pages/MovieDetails";
import ErrorPage from "./components/pages/ErrorPage";
import ListMovies from "./components/pages/ListMovies";
import Home from "./components/pages/Home";
import React, { useState } from 'react';
import GoogleMapComponent from './GoogleMapComponent';
function App() {
  const [movies, setMovies] = useState(moviesData);
  const [inputSearch, setInputSearch] = useState("");
  const [zoomLevel, setZoomLevel] = useState(12); // Set initial zoom level
  const [mapCenter, setMapCenter] = useState({ lat: 37.7749, lng: -122.4194 })
  const add = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  const [newRate, setNewRate] = useState("");
  const navigate = useNavigate();
  const setFilteredMovies = (filteredMovies) => {
    setMovies(filteredMovies);
    // You can navigate to the desired route after filtering, for example:
    navigate('/movies');
  };

  return (
    <div className="App">
      <Navigation setInputSearch={setInputSearch} inputSearch={inputSearch} setFilteredMovies={setFilteredMovies} />
      
      <Routes>
      <Route path='/movies' element={ <>
        <AddMovie add={add} />
        <FilterMovie newRate={newRate} setNewRate={setNewRate} setInputSearch={setInputSearch} />
        <GoogleMapComponent
        zoomLevel={zoomLevel}
        mapCenter={mapCenter}
        onZoomChange={setZoomLevel}
        onMapClick={setMapCenter}
      />
      
        <ListMovies  movies={movies} inputSearch={inputSearch} newRate={newRate}/>
        </>} /> 
      
      
      
      <Route path='/movie/:id' element={<MovieDetails />} />  
      <Route  path="/home" element={<Home />}/>     
      <Route path="/*" element={<ErrorPage />}/>
      </Routes>
    </div>
  );
}

export default App;
