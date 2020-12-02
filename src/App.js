import React, { useState } from "react";
import Search from "./Component/Search/Search";
import MovieList from "./Component/MovieList/MovieList";
import AddMovie from "./Component/AddMovie";
import { moviesData } from "./data";
import "./App.css";
import { Route ,Switch } from 'react-router-dom'
import Description from "./Component/Description/Description"

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
      
      <AddMovie handleAdd={addMovie} />
      <Switch>
           <Route exact path="/"> 
           <MovieList
        movieList={movies.filter(
          (movie) =>
            movie.name
              .toLowerCase()
              .includes(searchValue.toLowerCase().trim()) &&
            movie.rating >= searchRate
        )}
      />
            </Route>                                                      
            <Route exact path="/trailer/:name" render ={(props) => <Description res={movies}  {...props}   />}   />
            </Switch>


    </div>
    
  );
};

export default App;
