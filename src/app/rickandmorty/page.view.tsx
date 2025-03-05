import { IRickAndMortyPageView } from './page.model';
import {
  Container,
  Card,
  Title,
  Subtitle,
  CharacterGrid,
  CharacterCard,
  Avatar,
  CharacterInfo,
  Navigation,
  NavLink,
  Output,
  ErrorMessage,
  LoadingContainer
} from './page.style';
import { CircularProgress } from '@mui/material';

export function RickAndMortyPageView({ characters, jsonOutput, isLoading, error }: IRickAndMortyPageView) {
  if (isLoading) {
    return (
      <Container>
        <Title>Personagens de Rick and Morty</Title>
        <Subtitle>Buscando e formatando dados dos personagens</Subtitle>
        <Card>
          <LoadingContainer>
            <CircularProgress />
            <p>Carregando personagens...</p>
          </LoadingContainer>
        </Card>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Title>Personagens de Rick and Morty</Title>
        <Subtitle>Buscando e formatando dados dos personagens</Subtitle>
        <Card>
          <ErrorMessage>{error}</ErrorMessage>
        </Card>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Personagens de Rick and Morty</Title>
      <Subtitle>Buscando e formatando dados dos personagens</Subtitle>

      <Card>
        <CharacterGrid>
          {characters.map((character, index) => (
            <CharacterCard key={index}>
              <Avatar src={character.avatar} alt={character.nome} />
              <CharacterInfo>
                <p><strong>Nome:</strong> {character.nome}</p>
                <p><strong>Gênero:</strong> {character.genero}</p>
                <p><strong>Espécie:</strong> {character.especie}</p>
              </CharacterInfo>
            </CharacterCard>
          ))}
        </CharacterGrid>

        <div style={{ marginTop: '2rem' }}>
          <h3>Saída JSON:</h3>
          <Output>{jsonOutput}</Output>
        </div>
      </Card>
      <Navigation>
        <NavLink href="/update">← Exercício Anterior</NavLink>
        <NavLink href="/uppercase">Próximo Exercício →</NavLink>
      </Navigation>
    </Container>
  );
} 