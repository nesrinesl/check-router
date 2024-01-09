import React from "react";
import "./MovieCard.css";
import { Button, Card } from "react-bootstrap";
import ReactStars from "react-stars";
import { useNavigate } from "react-router-dom";
const MovieCard = ({ movie }) => {
  const navigate =useNavigate();

  return (
    <div>
      <Card className="mc">
        <Card.Img
          width={300}
          height={350}
          variant="top"
          src={movie.posterUrl}
        />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>

          <div style={{ display: "flex", justifyContent: "center" }}>
            {" "}
            <ReactStars
              count={5}
              size={30}
              value={movie.rate}
              edit={false}
              half={false}
            />
          </div>
          <Button
            variant="primary"
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            More Details
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
