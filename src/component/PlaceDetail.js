import React from "react";

function PlaceDetail(props) {
  const { place, handleEditClick, handleDeletePlace } = props;

  return (
    <>
      <h2>Place Detail</h2>
      <h3>{place.location}</h3>
      <p>{place.description}</p>
      <p>{place.date}</p>
      <p>{place.price}</p> 
      <ul>
        {place.tags.map((tag, index) => (
          <li key={index}>
            {tag}
          </li>
        ))}
      </ul>
      <button onClick={handleEditClick}>Edit Place Details</button>
      <button onClick={() => handleDeletePlace(place)}>Delete this Place</button>
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