import { useState } from 'react';
import {v4 as uuid} from 'uuid';

function PlaceForm(props) {
  const { place, onSubmit } = props;
  const [formData, setFormData] = useState(place);

  function handleFormFieldChange(event) {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  function handleChangeCheckbox(event) {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.checked,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    onSubmit({
      ...formData,
      id: place ? place.id : uuid(),
    })
    console.log("PlaceForm, handleSubmit, formData: ", formData);
  }

  const {
    location = '',
    date = '',
    description = '',
    price = '',
    farm = false,  //<-------------- 10 Jan 2024
    condo = false, //<-------------- 10 Jan 2024
  } = formData || {};

  // ADD PLACE FORM:
  // checkboxes start empty.
  // if user checks / unchecks boxes, update an array of tag values
  // then use this array to update formData

  // EDIT PLACE FORM:
  // refer to formData's 'tags' property.
  // read this, then update the state of the correlating checkboxes (checked or not) -- if string is in "tags", then check the box with that name
  // if user checks / unchecks boxes, update an array of tag values
  // then use this array to update formData

  //upon edit, details/list not updating - 10 Jan 2024
  //is handle submit saving data? yes
  //have to click then unclick to get 'false' for checkbox,

  return (
    <>
      {place ? <h2>Edit Place</h2> : <h2>Add New Place</h2>}
      <form onSubmit={handleSubmit}>
        <label>Location:
          <input
            type="text"
            name="location"
            value={location}
            onChange={handleFormFieldChange}
          />
        </label>
        <br/>
        <label>Date:
          <input
            type="text"
            name="date"
            value={date}
            onChange={handleFormFieldChange}
          />
        </label>
        <br/>
        <label>Description:
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleFormFieldChange}
          />
        </label>
        <br/>
        <label>Price:
          <input
            type="text"
            name="price"
            value={price}
            onChange={handleFormFieldChange}
          />
        </label>
        <br/>
        <label><strong>Tag:</strong>
          <br/>
          <label>Farm
          <input
            type="checkbox"
            name="farm"
            value={farm}
            onChange={handleChangeCheckbox}
            />
            </label>
           <label>Condo
          <input
            type="checkbox"
            name="condo"
            value={condo}
            onChange={handleChangeCheckbox}
          />
          </label>
        </label>
        <br/>
        <button type="submit">{place ? "Update Details" : "Add New Place"}</button>
        {/* <button type="button" onClick={onCancel}>Cancel</button> */}
      </form>
    </>
  );

}

export default PlaceForm;