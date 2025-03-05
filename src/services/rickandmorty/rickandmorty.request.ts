import { Character, RickAndMortyResponse } from './rickandmorty.model';

const BASE_URL = 'https://rickandmortyapi.com/api';

const CHARACTER_IDS = {
  rickSanchez: 1,
  mortySmith: 2,
  summerSmith: 3,
  bethSmith: 4,
  jerrySmith: 5
} as const;

export const rickAndMortyService = {
  getCharacters: async (): Promise<Character[]> => {
    try {
      const characterIds = Object.values(CHARACTER_IDS).join(',');
      const response = await fetch(`${BASE_URL}/character/${characterIds}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      return data.map((character: RickAndMortyResponse) => ({
        nome: character.name,
        genero: character.gender === 'Male' ? 'Homem' : 'Mulher',
        avatar: `https://rickandmortyapi.com/api/character/avatar/${character.id}.jpeg`,
        especie: 'Humano'
      }));
    } catch (error) {
      console.error('Error fetching characters:', error);
      throw new Error('Failed to fetch characters. Please try again later.');
    }
  }
}; 