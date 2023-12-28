import React from "react";
import Place from "./Place";

function PlaceList(props) {
 
  return (
    <>
      <h2>Place List</h2>
      {props.placeList.map((entry) => 
        <Place
          location={entry.location}
          description={entry.description}
          date={entry.date}
          price={entry.price}
          key={entry.id}
        />
      )}
    </>
  );
}

export default PlaceList;

  // const testList = [
  //   {
  //     location: "Seattle, Washington",
  //     description: "cozy, close to attractions",
  //     date: "Jan 4th",
  //     price: "100",
  //   },
  //   {
  //     location: "Seattle, Washington",
  //     description: "cozy, close to attractions",
  //     date: "Jan 4th",
  //     price: "100",
  //   },
  //   {
  //     location: "Seattle, Washington",
  //     description: "cozy, close to attractions",
  //     date: "Jan 4th",
  //     price: "100",
  //   }
  // ];