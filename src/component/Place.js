import React from "react";
import PictureCard from "./PictureCard";

function Place(props) {
  return (
    <PictureCard>
      <h3>{props.location}</h3>
      <p>{props.description}</p>
      <p>{props.date}</p>
      <p>{props.price}</p>
    </PictureCard>
  );
}

export default Place;