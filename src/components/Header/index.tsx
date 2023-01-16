import Logo from '~/assets/logo.png';
import { PokedexIcon } from '~/assets/icons';
import { Container } from './styles';
import { SearchBar } from '../SearchBar';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();

  const goToPokedex = () => navigate('/pokedex');

  return (
    <Container>
      <img src={Logo} alt="Logo pokedex" width="150" />
      <SearchBar />
      <img src={PokedexIcon} alt="icone pokedex" width="32" onClick={goToPokedex} />
    </Container>
  );
}
