import Axios, { AxiosInstance } from 'axios';

export const Api: AxiosInstance = Axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
});
