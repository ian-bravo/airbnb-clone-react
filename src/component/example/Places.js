import Place from './Place';

/**
 * plurality implies that it's an array, no need to name it with "list"
 */
export default function Places({
  places,
  onClickPlace,
}) {
  return (
    <>
      <h2>Places: </h2>
      {places.map((place) =>
        <Place
          key={place.id}
          place={place}
          onClick={onClickPlace}
        />
      )}
    </>
  );
}
