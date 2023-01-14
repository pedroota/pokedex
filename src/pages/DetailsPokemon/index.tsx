import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getPokemon } from '~/services/pokemon.service';
import { FigureDetails } from './components/FigureDetails';
import { InfoDetails } from './components/InfoDetails';
import { Container } from './styles';

export function DetailsPokemon() {
  const { pokemonName } = useParams();
  const { data } = useQuery(['pokemon', pokemonName], () => getPokemon(pokemonName));

  return (
    <Container>
      <FigureDetails imageUrl={data?.data.sprites.front_default} order={data?.data.order} />
      <InfoDetails
        name={data?.data.name}
        weight={data?.data.weight}
        types={data?.data.types}
        abilities={data?.data.abilities}
        height={data?.data.height}
        stats={data?.data.stats}
      />
    </Container>
  );
}
