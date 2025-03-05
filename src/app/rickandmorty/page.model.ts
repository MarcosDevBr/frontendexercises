export interface ICharacter {
  nome: string;
  genero: string;
  especie: string;
  avatar: string;
}

export interface IRickAndMortyPageView {
  characters: ICharacter[];
  jsonOutput: string;
  isLoading: boolean;
  error: string | null;
} 