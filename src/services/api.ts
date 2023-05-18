import { api } from "@/config/axios";

export const fetchCharacters = (page: number, offset: number, limit: number, name: string = "") => {
  return api.get(`/characters?api_key=${process.env.API_KEY}&format=json&page=${page}&offset=${offset}
  &limit=${limit}&filter=name:${name}`);
};

export const fetchCharacter = (id: number) => {
    return api.get(`/character/4005-${id}?api_key=${process.env.API_KEY}&format=json`)
}

