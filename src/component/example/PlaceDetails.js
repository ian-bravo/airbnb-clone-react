import { useState } from 'react';

import Place from './Place';
import PlaceForm from './PlaceForm';

export default function PlaceDetails({
  place,
  onBack,
  onUpdate,
}) {
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    return (
      <PlaceForm
        place={place}
        onSubmit={(updatedPlace) => {
          setShowForm(false);
          onUpdate(updatedPlace);
        }}
        onCancel={() => setShowForm(false)}
      />
    );
  }

  return (
    <>
      <h2>Place Details: </h2>
      <Place place={place} />
      <button onClick={onBack}>Back</button>
      <button onClick={() => setShowForm(true)}>Edit</button>
    </>
  )
}
