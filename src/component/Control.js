import React, {useState} from "react";
import PlaceList from "./PlaceList";
import AddPlaceForm from "./AddPlaceForm";

function Control() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);

  const handleClick = () => {
    setFormVisibleOnPage(!formVisibleOnPage);
  }


  let currentlyVisibleComponent = null;
  if (formVisibleOnPage) {
    currentlyVisibleComponent = <AddPlaceForm />;
  } else {
    currentlyVisibleComponent = <PlaceList />;
  }

  return (
    <>
      <h2>Control</h2>
      {currentlyVisibleComponent}
      <button onClick={handleClick}>Toggle</button>
    </>
  );
}

export default Control;