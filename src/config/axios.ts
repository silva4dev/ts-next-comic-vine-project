import axios from "axios";

const url = `https://comicvine.gamespot.com/api`;

const api = axios.create({
    baseURL: url,
    withCredentials: false
});

export const fetchCharacters = (page: number, offset: number, limit: number, name: string = "") => {
  return api.get(`${url}/characters/?api_key=${process.env.API_KEY}&format=json&page=${page}&offset=${offset}
  &limit=${limit}&filter=name:${name}`);
};

