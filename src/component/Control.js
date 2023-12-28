import React, {useState, useEffect} from "react";
import PlaceList from "./PlaceList";
import AddPlaceForm from "./AddPlaceForm";

function Control() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [usePlaceList, setUsePlaceList] = useState([]);

  // useEffect(() => {
  //   console.log("handleAddingNewPlaceToList Result: ", usePlaceList);
  // }, []);

  const handleClick = () => {
    setFormVisibleOnPage(!formVisibleOnPage);
  }
  
  const handleAddingNewPlaceToList = (newPlace) => {
    const newPlaceList = [...usePlaceList, newPlace];
    setUsePlaceList(newPlaceList);
    // usePlaceList --> needs to be copied
    // new entry coming from form --> this will be added to "usePlaceList"
    // setUsePlaceList(**everything in here is now THE LIST**)
  }
//need to display the list - 27 Dec 2023

  let currentlyVisibleComponent = null;
  let buttonText = null;

  if (formVisibleOnPage) {
    currentlyVisibleComponent = <AddPlaceForm handleAddingNewPlaceToList={ handleAddingNewPlaceToList} />;
    buttonText = "Back to Place List";
  } else {
    currentlyVisibleComponent = <PlaceList />;
    buttonText = "Add New Place";
  }

  return (
    <>
      <h2>Control</h2>
      {currentlyVisibleComponent}
      <button onClick={handleClick}>{buttonText}</button>
    </>
  );
}

export default Control;




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

  // const addEntryToTestList = {
  //   location: "Seattle, Washington",
  //   description: "cozy, close to attractions",
  //   date: "Jan 4th",
  //   price: "100",
  // };