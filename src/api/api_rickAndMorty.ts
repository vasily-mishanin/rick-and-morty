const baseURL = 'https://rickandmortyapi.com/api';
import type { RickAndMortyCharacters } from 'model/types';
import type { ISearchBarState } from '../components/SearchBar/SearchBar';

export async function getAllCharacters() {
  try {
    const res = await fetch(`${baseURL}/character`);
    const data: RickAndMortyCharacters = await res.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

export async function getCharactersByQuery(query: ISearchBarState) {
  const baseURL = 'https://rickandmortyapi.com';
  const url = new URL('api/character/', baseURL);
  if (query.name) {
    url.searchParams.append('name', query.name.trim().toLowerCase());
  }
  if (query.type) {
    url.searchParams.append('type', query.type);
  }
  if (query.gender) {
    url.searchParams.append('gender', query.gender);
  }
  if (query.status) {
    url.searchParams.append('status', query.status);
  }
  if (query.page) {
    url.searchParams.append('page', query.page);
  }
  console.log(url);
  try {
    const response = await fetch(url, { method: 'GET' });
    const data: RickAndMortyCharacters = await response.json();
    return data;
  } catch (err) {
    throw new Error('Could not fetch characters on such a query');
  }
}
