import React from 'react'
import {ListGroup} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Lists(props) {
  let htmlList = props.genreList.map( genres =>{
    return (
    <div><ListGroup.Item style={{width: "200px", textAlign: "center", color: "#BEEDAA",
    backgroundColor: "#3F4B3B",
    border: "1px solid #73956F",
   }} action >
    {genres.name}
  </ListGroup.Item></div>
    
    )
  }

  )
  return (
    <div>
      {htmlList}
    </div>
  )
}
