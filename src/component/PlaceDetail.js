import React from "react";

function PlaceDetail(props) {
  const { place, handleEditClick } = props;

  return (
    <>
      <h2>Place Detail</h2>
      <h3>{place.location}</h3>
      <p>{place.description}</p>
      <p>{place.date}</p>
      <p>{place.price}</p> 
      <button onClick={handleEditClick}>Edit Place Details</button>
    </>
  );
}

export default PlaceDetail;

// place = {
//   location: "Seattle, Washington",
//   description: "cozy, close to attractions",
//   date: "Jan 4th",
//   price: "100",
//   id: 1,
// };

// handleClick