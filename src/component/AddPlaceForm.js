import React from "react";
import { v4 } from "uuid";

function AddPlaceForm(props) {
  function whenSubmitClicked(event) {
    event.preventDefault();

    props.handleAddingNewPlaceToList({
      location: event.target.location.value,
      date: event.target.date.value,
      description: event.target.description.value,
      price: event.target.price.value,
      id: v4(),
    });
    console.log("Location input:", event.target.location.value);
    console.log("Date input:", event.target.date.value);
    console.log("Description input:", event.target.description.value);
    console.log("Price input:", event.target.price.value);
  }
  
  return (
    <>
    <h2>Add Place Form</h2>  
      <form onSubmit={whenSubmitClicked}>
        <label htmlFor="location">Add a location:</label>
        <input type="text" name="location" />
        <br/>
        <label htmlFor="date">Add a date:</label>
        <input type="text" name="date" />
        <br/>
        <label htmlFor="description">Add a description:</label>
        <input type="text" name="description"/>
        <br/>
        <label htmlFor="price">Add a price:</label>
        <input type="text" name="price"/>
        <br/>
        <button type="submit">Add a place!</button>
      </form>
    </>
  );
}

export default AddPlaceForm;