import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Movie(props) {
  let htmlMovie = props.movieList.map(movie => {
    return (
      <Card
        className="col-md-3"
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "4px",
          color: " #3F4B3B",
          backgroundColor: "#98B58F"
        }}
      >
        <Card.Img
          variant="top"
          style={{ marginTop: "15px" }}
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`}
        />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text
            style={{              position: "absolute",

              textAlign: "right"
            }}
          >
            {movie.vote_average}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  });

  return <div className="row">{htmlMovie}</div>;
}
