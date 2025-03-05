export interface Character {
  nome: string;
  genero: string;
  avatar: string;
  especie: string;
}

export interface RickAndMortyResponse {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
} 