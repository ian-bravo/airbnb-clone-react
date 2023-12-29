export default function Place({ place, onClick }) {
  return (
    <div onClick={() => onClick?.(place.id)}>
      <h3>{place.name}</h3>
      <p>{place.location}</p>
      <p>{place.description}</p>
      <p>{place.date}</p>
      <p>{place.price}</p>
    </div>
  );
}