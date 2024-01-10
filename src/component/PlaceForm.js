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

  function handleSubmit(event) {
    event.preventDefault();
    
    onSubmit({
      ...formData,
      id: place ? place.id : uuid(),
    })
  }

  const {
    location = '',
    date = '',
    description = '',
    price = '',
    tags = '',
  } = formData || {};

  tags = ['condo', 'farm'];

  // if user checks the boxes, then update this array.
  // if user unchecks the boxes, then update this array.
  //checked ? 
  // Pre-populating checkboxes...

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
        <label>Date:
          <input
            type="text"
            name="date"
            value={date}
            onChange={handleFormFieldChange}
          />
        </label>
        <label>Description:
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleFormFieldChange}
          />
        </label>
        <label>Price:
          <input
            type="text"
            name="price"
            value={price}
            onChange={handleFormFieldChange}
          />
        </label>
        <label>Tag:
          <input
            type="checkbox"
            name="tag"
            value={price}
            onChange={handleFormFieldChange}
          />
        </label>
        <button type="submit">{place ? "Update Details" : "Add New Place"}</button>
        {/* <button type="button" onClick={onCancel}>Cancel</button> */}
      </form>
    </>
  );

}

export default PlaceForm;