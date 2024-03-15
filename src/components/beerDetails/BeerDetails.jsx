export function BeerDetails({ name, origin, description }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Opprinnelse: {origin}</p>
      <p>{description}</p>
    </div>
  );
}