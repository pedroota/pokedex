import { Api } from './api.service';

export const getPokemon = async (query = '', pageNum = 0) => {
  const data = await Api.get(`/pokemon/${query}?limit=20&offset=${pageNum}`);

  return data;
};
