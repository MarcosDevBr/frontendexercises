'use client';

import { useState, useEffect } from 'react';
import { rickAndMortyService } from '@/services/rickandmorty/rickandmorty.request';
import { RickAndMortyPageView } from './page.view';
import { Character } from '@/services/rickandmorty/rickandmorty.model';

export default function RickAndMortyPage() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [jsonOutput, setJsonOutput] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result = await rickAndMortyService.getCharacters();
        setCharacters(result);
        setJsonOutput(JSON.stringify(result, null, 2));
      } catch (error) {
        console.error('Error fetching characters:', error);
        setError('Erro ao carregar os personagens. Por favor, tente novamente.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <RickAndMortyPageView
      characters={characters}
      jsonOutput={jsonOutput}
      isLoading={isLoading}
      error={error}
    />
  );
}