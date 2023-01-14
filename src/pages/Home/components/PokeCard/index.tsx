import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { getPokemon } from '~/services/pokemon.service';
import { Container, PokeName } from './styles';

interface PokeCardProps {
  name: string;
}

export function PokeCard({ name }: PokeCardProps) {
  const { data } = useQuery(['pokemon', name], () => getPokemon(name));
  const navigate = useNavigate();

  const navigateToDetailsPokemon = () => {
    navigate(`/pokemon/${name}`);
  };

  return (
    <Container onClick={navigateToDetailsPokemon}>
      <img src={data?.data.sprites.front_default} />
      <PokeName>{data?.data.name}</PokeName>
    </Container>
  );
}
