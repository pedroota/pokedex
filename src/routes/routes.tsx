import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from '~/pages/Home';
import { DetailsPokemon } from '~/pages/DetailsPokemon';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:pokemonName" element={<DetailsPokemon />} />
      </Routes>
    </BrowserRouter>
  );
}
