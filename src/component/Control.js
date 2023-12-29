import React, {useState, useEffect} from "react";
import PlaceList from "./PlaceList";
import AddPlaceForm from "./AddPlaceForm";
import PlaceDetail from "./PlaceDetail";

const startingData = [
  {
    location: "Seattle, Washington",
    description: "cozy, close to attractions",
    date: "Jan 4th",
    price: "100",
    id: 1,
  },
  {
    location: "Portland, Oregon",
    description: "urban center, waterfront",
    date: "Jan 2nd",
    price: "200",
    id: 2,
  }
];

function Control() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [usePlaceList, setUsePlaceList] = useState(startingData);
  const [selectedPlace, setSelectedPlace] = useState(null);

  useEffect(() => {
    console.log("current usePlaceList: ", usePlaceList);
  }, [usePlaceList]);

  useEffect(() => {
    console.log("handleChangingSelectedPlace, selectedPlace: ", selectedPlace);    
  },[selectedPlace]);

  const handleClick = () => {
    if (selectedPlace) {
      setSelectedPlace(null);      
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  }
  
  const handleAddingNewPlaceToList = (newPlace) => {
    const newPlaceList = [...usePlaceList, newPlace];
    setUsePlaceList(newPlaceList);
  }

  //show detail
  const handleChangingSelectedPlace = (id) => {
    console.log("clicked div Id: ", id);
    const targetPlace = usePlaceList.filter((entry => entry.id === id))[0];
    setSelectedPlace(targetPlace);
  }


  let currentlyVisibleComponent = null;
  let buttonText = null;

  if (selectedPlace) {
    currentlyVisibleComponent = <PlaceDetail place={selectedPlace} handleClick={handleClick}/>;
    buttonText = "Back to Place List";
  } else if (formVisibleOnPage) {
    currentlyVisibleComponent = <AddPlaceForm handleClick={handleClick} handleAddingNewPlaceToList={handleAddingNewPlaceToList} />;
    buttonText = "Back to Place List";
  } else {
    currentlyVisibleComponent = <PlaceList placeList={usePlaceList} handleChangingSelectedPlace={handleChangingSelectedPlace}/>;
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

