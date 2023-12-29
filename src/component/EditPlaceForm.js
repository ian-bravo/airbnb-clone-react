import React, {useState, useRef, useEffect} from "react";

function EditPlaceForm(props) {
  const { place, handleUpdatingPlaceInList } = props;

  const initialState = {
    location: place.location,
    description: place.description,
    date: place.date,
    price: place.price,
    id: place.id,
  };

  const [placeProperties, setPlaceProperties] = useState(initialState);

  const locationInputRef = useRef(null);
  const descriptionInputRef = useRef(null);
  const dateInputRef = useRef(null);
  const priceInputRef = useRef(null);

  const handleChange = (event) => {
    const { target } = event;
    if (locationInputRef.current) {    
      setPlaceProperties((prevState) => ({
        ...prevState,
        location: locationInputRef.current.value,
      }));
    }
    if (descriptionInputRef.current) {    
      setPlaceProperties((prevState) => ({
        ...prevState,
        description: descriptionInputRef.current.value,
      }));
    }
    if (dateInputRef.current) {      
      setPlaceProperties((prevState) => ({
        ...prevState,
        date: dateInputRef.current.value,
      }));
    }
    if (priceInputRef.current) {      
      setPlaceProperties((prevState) => ({
        ...prevState,
        price: priceInputRef.current.value,
      }));
    }
  };

  useEffect(() => {
    if (locationInputRef.current) {
      locationInputRef.current.value = place.location || "";
    }
    if (descriptionInputRef.current) {
      descriptionInputRef.current.value = place.description || "";
    }
    if (dateInputRef.current) {
      dateInputRef.current.value = place.date || "";
    }
    if (priceInputRef.current) {
      priceInputRef.current.value = place.price || "";
    }
  }, [
    place.location,
    place.description,
    place.date,
    place.price,
  ]);

  function uponUpdateDetailsClick(event) {
    event.preventDefault();
    handleUpdatingPlaceInList(placeProperties);
    // handleUpdatingPlaceInList({
    //   location: event.target.location.value,
    //   description: event.target.description.value,
    //   date: event.target.date.value,
    //   price: event.target.price.value,
    //   id: place.id,
    // });
  }

  return (
    <>
      <h2>Edit Place Form</h2>
      <form onSubmit={uponUpdateDetailsClick}>
        <label htmlFor="location">Edit location:</label>
        <input ref={locationInputRef} type="text" name="location" onChange={handleChange} />
        <br/>
        <label htmlFor="date">Edit date:</label>
        <input ref={dateInputRef} type="text" name="date" onChange={handleChange}/>
        <br/>
        <label htmlFor="description">Edit description:</label>
        <input ref={descriptionInputRef} type="text" name="description" onChange={handleChange}/>
        <br/>
        <label htmlFor="price">Edit price:</label>
        <input ref={priceInputRef} type="text" name="price" onChange={handleChange}/>
        <br/>     
      <button type="submit">Update Details</button>
      </form>    
    </>
  );
}

export default EditPlaceForm;