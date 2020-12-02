import React from "react";
import StarRating from "../StarRating";
import "./MovieCard.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


const MovieCard = ({ film }) => {
  return (
    <div className="movie-card">
      <StarRating rate={film.rating} />
      <img src={film.image} alt={film.name} />
      <h3> {film.name} </h3>
      <p>{film.date} </p>
      <div className="card_right__review">
          <p>{film.Description}</p>
          <Link to= {`trailer/${film.name}`}  style={{textDecoration:"none"}}   >
          <Button >Read more</Button>
          </Link>
       
        </div>
    </div>
  );
};

export default MovieCard;
