import { Header } from '~/components/Header';
import { ListingPokemons } from './components/ListingPokemons';

export function Home() {
  return (
    <main>
      <Header />
      <ListingPokemons />
    </main>
  );
}
