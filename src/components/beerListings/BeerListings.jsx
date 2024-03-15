import { Layout } from '../layout/Layout';
import { BeerDetails } from '../beerDetails/BeerDetails';
import beers from '../../assets/beers.json';

export function BeerListings() {
  return (
    <Layout>
      {beers.map((beer) => (
        <BeerDetails
          name={beer.name}
          origin={beer.origin}
          description={beer.description}
        />
      ))}
    </Layout>
  );
}