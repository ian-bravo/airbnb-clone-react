import React from "react";

function Place(props) {
  return (
    <>
      <h3>{props.location}</h3>
      <p>{props.description}</p>
      <p>{props.date}</p>
      <p>{props.price}</p>
      <hr/>
    </>
  );
}

export default Place;