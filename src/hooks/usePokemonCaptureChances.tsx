import { useState, useEffect } from 'react';
import { Pokemon } from '~/interfaces/pokemon.interface';

interface usePokemonCaptureChancesReturn {
  chancesCapture: number;
}

export function usePokemonCaptureChances({ stats }: Pick<Pokemon, 'stats'>): usePokemonCaptureChancesReturn {
  const [chancesCapture, setChancesPokemon] = useState(0);

  useEffect(() => {
    setChancesPokemon(100 - stats.map((stat) => stat.base_stat).reduce((acc, value) => acc + value, 0) / 6);
  }, [stats]);

  return { chancesCapture };
}
