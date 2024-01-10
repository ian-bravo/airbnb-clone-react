import React from "react";
import PictureCard from "./PictureCard";

function Place(props) {
  const { handleChangingSelectedPlace, location, description, date, price, id} = props;
  return (
    <PictureCard>
      <div onClick={() => handleChangingSelectedPlace(id)}>
        <h3>{location}</h3>
        <p>{description}</p>
        <p>{date}</p>
        <p>{price}</p>
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
