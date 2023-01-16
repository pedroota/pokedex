import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from '~/pages/Home';
import { DetailsPokemon } from '~/pages/DetailsPokemon';
import { Pokedex } from '~/pages/Pokedex';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:pokemonName" element={<DetailsPokemon />} />
        <Route path="/pokedex" element={<Pokedex />} />
      </Routes>
    </BrowserRouter>
  );
}
