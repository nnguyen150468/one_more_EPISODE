import React from 'react'
import { Card } from "react-bootstrap";

export default function Popularity(props) {
  let htmlPopularity = props.popularList.map(result => {
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
        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${result.poster_path}`}
      />
      <Card.Body>
        <Card.Title>{result.title}</Card.Title>
        <Card.Text
          style={{              position: "absolute",

            textAlign: "right"
          }}
        >
          {result.vote_average}
        </Card.Text>
      </Card.Body>
    </Card>
    )
  }

  )
  return (
    <div className="row">
      {htmlPopularity}
    </div>
  )
}
