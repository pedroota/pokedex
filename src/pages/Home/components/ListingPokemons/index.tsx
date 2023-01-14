import { useState, useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getPokemon } from '~/services/pokemon.service';
import { PokeCard } from '../PokeCard';
import { Container, Listing, ButtonNavigatePages } from './styles';
import { ButtonGroup } from '~/components/ButtonGroup';

interface PokemonType {
  name: string;
  url: string;
}

export function ListingPokemons() {
  const queryClient = useQueryClient();
  const [pageNum, setPageNum] = useState(0);
  const { data, isPreviousData } = useQuery(['pokemons', pageNum], () => getPokemon('', pageNum), {
    keepPreviousData: true,
    staleTime: 50000
  });

  useEffect(() => {
    if (!isPreviousData) {
      queryClient.prefetchQuery({
        queryKey: ['pokemons', pageNum + 20],
        queryFn: () => getPokemon('', pageNum + 20)
      });
    }
  }, [data, isPreviousData, pageNum, queryClient]);

  return (
    <Container>
      <Listing>
        {data?.data.results.map((pokemon: PokemonType) => (
          <PokeCard key={pokemon.name} name={pokemon.name} />
        ))}
      </Listing>
      <ButtonGroup>
        <ButtonNavigatePages
          onClick={() => {
            setPageNum((prev) => Math.max(prev - 20, 0));
          }}
        >
          Previous
        </ButtonNavigatePages>
        <ButtonNavigatePages
          onClick={() => {
            setPageNum((prev) => prev + 20);
          }}
        >
          Next
        </ButtonNavigatePages>
      </ButtonGroup>
    </Container>
  );
}
