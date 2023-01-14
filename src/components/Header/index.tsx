import Logo from '~/assets/logo.png';
import { PokedexIcon } from '~/assets/icons';
import { Container } from './styles';
import { SearchBar } from '../SearchBar';

export function Header() {
  return (
    <Container>
      <img src={Logo} alt="Logo pokedex" width="150" />
      <SearchBar />
      <img src={PokedexIcon} alt="icone pokedex" width="32" />
    </Container>
  );
}
