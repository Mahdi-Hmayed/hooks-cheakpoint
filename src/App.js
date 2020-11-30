import React, { useState } from "react";
import Search from "./Component/Search/Search";
import MovieList from "./Component/MovieList/MovieList";
import AddMovie from "./Component/AddMovie";
import { moviesData } from "./data";
import "./App.css";


const App = () => {
  const [movies, setMovies] = useState(moviesData);
  const [searchRate, setSearchRate] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  
  const handleSearch = (event) => setSearchValue(event.target.value);
  
  const handleSearchRate = (newRate) => setSearchRate(newRate);

  
  const addMovie = (newMovie) => setMovies([...movies, newMovie]);
  return (
    <div>
      <Search
        searchValue={searchValue}
        handleSearch={handleSearch}
        searchRate={searchRate}
        handleSearchRate={handleSearchRate}
      />
      <MovieList
        movieList={movies.filter(
          (movie) =>
            movie.name
              .toLowerCase()
              .includes(searchValue.toLowerCase().trim()) &&
            movie.rating >= searchRate
        )}
      />
      <AddMovie handleAdd={addMovie} />
    </div>
  );
};

export default App;
