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

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [inputSearch, setInputSearch] = useState("");

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
