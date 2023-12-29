import { useMemo, useState } from 'react';

import PlaceDetails from './PlaceDetails';
import PlaceForm from './PlaceForm';
import Places from './Places';

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

export default function PlaceContainer() {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const [places, setPlaces] = useState(startingData);
  const [addNewPlace, setAddNewPlace] = useState(false);

  const selectedPlace = useMemo(() => {
    if (!selectedPlaceId) {
      return null;
    }

    return places.find((place) => place.id === selectedPlaceId);
  }, [selectedPlaceId, places]);

  const handleUpdatePlace = (updatedPlace) => {
    // use `.map` and return the updated place if the place id matches, otherwise
    // return the original place. this ensures that the original order is not
    // changed after editing a place.
    setPlaces((places) => places.map((place) => {
      if (place.id === updatedPlace.id) {
        return updatedPlace;
      }

      return place;
    }));
  }

  if (addNewPlace) {
    return (
      <PlaceForm
        onSubmit={(place) => {
          setPlaces((places) => [...places, place]);
          setAddNewPlace(false);
        }}
        onCancel={() => setAddNewPlace(false)}
      />
    );
  }

  if (selectedPlace) {
    return (
      <PlaceDetails
        place={selectedPlace}
        onBack={() => setSelectedPlaceId(null)}
        onUpdate={handleUpdatePlace}
      />
    );
  }

  return (
    <>
      <Places
        places={places}
        onClickPlace={setSelectedPlaceId}
      />
      <button onClick={() => setAddNewPlace(true)}>+ Add New Place</button>
    </>
  );
}
