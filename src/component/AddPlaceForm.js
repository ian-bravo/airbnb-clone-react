import React, {useState, useEffect} from "react";
import { v4 } from "uuid";

function AddPlaceForm(props) {
  const [allChecked, setAllChecked] = useState([]);

  // useEffect(() => {
  //   console.log("AddPlaceForm checkboxes allChecked: ", allChecked);
  // }, [allChecked]);

  function handleChange(e) {
    if (e.target.checked) {
      setAllChecked([...allChecked, e.target.value]);
    } else {
      setAllChecked(allChecked.filter((item) => item !== e.target.value));
    }
  }
  
  function whenSubmitClicked(event) {
    event.preventDefault();

    props.handleAddingNewPlaceToList({
      location: event.target.location.value,
      date: event.target.date.value,
      description: event.target.description.value,
      price: event.target.price.value,
      tag: allChecked,
      id: v4(),
    });
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
        <input value = "farm" type = "checkbox" onChange={handleChange} />
        <span>farm</span>
        <input value = "tower" type = "checkbox" onChange={handleChange} />
        <span>tower</span>
        <input value = "condo" type = "checkbox" onChange={handleChange} />
        <span>condo</span>
        <input value = "cabin" type = "checkbox" onChange={handleChange} />
        <span>cabin</span>
        <input value = "guesthouse" type = "checkbox" onChange={handleChange} />
        <span>guesthouse</span>
        <br/>
        <button type="submit">Add a place!</button>
      </form>
    </>
  );
}

export default AddPlaceForm;