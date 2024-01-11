import React from "react";
import PictureCard from "./PictureCard";

function Place(props) {
  const { handleChangingSelectedPlace, location, description, date, price, farm, condo, id} = props;
  return (
    <PictureCard>
      <div onClick={() => handleChangingSelectedPlace(id)}>
        <h3>Location: {location}</h3>
        <p>Description: {description}</p>
        <p>Date: {date}</p>
        <p>Price: {price}</p>
        <p>Farm: {farm ? "true" : "false"}</p>
        <p>Condo: {condo ? "true" : "false"}</p>
        {/* <ul>
        {tags.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        </ul> */}
      </div>
    </PictureCard>
  );
}

export default Place;
