import React, {useState, useEffect} from "react";
import PlaceList from "./PlaceList";
import AddPlaceForm from "./AddPlaceForm";
import PlaceDetail from "./PlaceDetail";
import EditPlaceForm from "./EditPlaceForm";

const startingData = [
  {
    date: "Jan 4th",
    description: "cozy, close to attractions",
    id: 1,
    location: "Seattle, Washington",
    price: "100",
    tags: ["farm", "cabin", "tower"],
    // farm: true,
    // cabin: true,
    // tower: true,
    // condo: false,
    // guesthouse: false
  },
  {
    date: "Jan 2nd",
    description: "urban center, waterfront",
    id: 2,
    location: "Portland, Oregon",
    price: "200",
    tags: ["condo"],
    // farm: false,
    // cabin: false,
    // tower: false,
    // condo: true,
    // guesthouse: false
  },
  {
    date: "NYE",
    description: "in the hills",
    id: 3,
    location: "Seattle, Washington",
    price: "100",
    tags: ["condo", "guesthouse"],
    // farm: false,
    // cabin: false,
    // tower: false,
    // condo: true,
    // guesthouse: true
  }
];

function Control() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [usePlaceList, setUsePlaceList] = useState(startingData);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [editing, setEditing] = useState(false);

  // useEffect(() => {
  //   console.log("current usePlaceList: ", usePlaceList);
  // }, [usePlaceList]);

  // useEffect(() => {
  //   console.log("handleChangingSelectedPlace, selectedPlace: ", selectedPlace);    
  // },[selectedPlace]);

  useEffect(() => {
    // if (selectedPlace !== null || selectedPlace !== undefined) {      
    if (selectedPlace) {      
      handleChangingSelectedPlace(selectedPlace.id);
    }
  }, [usePlaceList]);

  const handleClick = () => {
    if (editing){
      setEditing(false);
    } else if (selectedPlace) {
      setSelectedPlace(null);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  }
  
  const handleAddingNewPlaceToList = (newPlace) => {
    const newPlaceList = [...usePlaceList, newPlace];
    setUsePlaceList(newPlaceList);
    console.log("handleAddingNewPlaceToList: ", newPlace);
  }

  //show detail
  const handleChangingSelectedPlace = (id) => {
    console.log("clicked div Id: ", id);
    const targetPlace = usePlaceList.filter((entry => entry.id === id))[0];
    setSelectedPlace(targetPlace);
  }

  const handleEditClick = () => {
    setEditing(true);
  }

  const handleUpdatingPlaceInList = (updatedPlace) => {
    const newPlaceList = usePlaceList.filter((entry) => entry.id !== updatedPlace.id).concat(updatedPlace);
    setUsePlaceList(newPlaceList);
    setEditing(false);
  }

  const handleDeletePlace = (deletePlace) => {
    const deleteThisPlace = usePlaceList.filter((entry) => entry.id !== deletePlace.id);
    setUsePlaceList(deleteThisPlace);
  }

  let currentlyVisibleComponent = null;
  let buttonText = null;

  if (editing) {
    currentlyVisibleComponent = <EditPlaceForm place={selectedPlace} handleUpdatingPlaceInList={handleUpdatingPlaceInList} />;
    buttonText = "Back to Details";
  } else if (selectedPlace) {
    currentlyVisibleComponent = <PlaceDetail place={selectedPlace} handleEditClick={handleEditClick} handleClick={handleClick} handleDeletePlace={handleDeletePlace}/>;
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

