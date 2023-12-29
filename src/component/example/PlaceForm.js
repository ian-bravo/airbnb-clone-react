import { useState } from 'react';
import { v4 as uuid } from 'uuid';

/**
 * PlaceForm is a fine name, having "edit" in the name is redundant since 
 * "form" implies editing. 
 * 
 * We can also use the same form for adding a new place.
 * 
 * The form submit handler is exposed as `onSubmit`, the implementation details 
 * of what the parent does after submitting the form are not the concern of this 
 * component.
 */
export default function PlaceForm({ 
  // we can just destructure the props here
  place,
  onSubmit,
  onCancel,
}) {
  const [formData, setFormData] = useState(place);

  /**
   * the input `name` prop is passed as event.target.name, which we can use to 
   * identify the property being updated, no need for refs
   */
  const handleFormFieldChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  /**
   * up for debate, but my preference is to name handler functions 
   * "handleEvent", "Event" being whatever the event is, in this case "submit".
   */
  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({
      ...formData,
      id: place ? place.id : uuid(),
    });
  };

  const {
    location = '',
    date = '',
    description = '',
    price = '',
  } = formData ||  {};

  return (
    <>
      <h2>Edit Place: </h2>
      <form onSubmit={handleSubmit}>
        {/* <label> can wrap <input>, same as using `label.htmlFor` */}
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={location}
            onChange={handleFormFieldChange}
          />
        </label>
        <label>
          Date:
          <input
            type="text"
            name="date"
            value={date}
            onChange={handleFormFieldChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleFormFieldChange}
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={price}
            onChange={handleFormFieldChange}
          />
        </label>
        <button type="submit">{place ? 'Update' : 'Create'}</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </>

  )
}