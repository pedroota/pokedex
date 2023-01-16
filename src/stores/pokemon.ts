import { create } from 'zustand';

interface Pokemon {
  _id: string;
  name: string;
  description: string;
  image: string;
}

interface usePokemonState {
  pokemons: Pokemon[];
  addPokemon: (pokemon: Pokemon) => void;
  updatePokemon: (_id: string, pokemon: Pick<Pokemon, 'name' | 'description'>) => void;
  deletePokemon: (_id: string) => void;
}

export const usePokemons = create<usePokemonState>((set) => ({
  pokemons: [],

  addPokemon: (pokemon: Pokemon) => set((state) => ({ pokemons: [...state.pokemons, pokemon] })),

  updatePokemon: (_id: string, pokemon: Pick<Pokemon, 'name' | 'description'>) =>
    set((state) => ({
      pokemons: state.pokemons.map((listPokemon) => {
        if (listPokemon._id !== _id) return listPokemon;
        return { ...listPokemon, ...pokemon };
      })
    })),

  deletePokemon: (_id: string) =>
    set((state) => ({ pokemons: state.pokemons.filter((listPokemon) => listPokemon._id !== _id) }))
}));
