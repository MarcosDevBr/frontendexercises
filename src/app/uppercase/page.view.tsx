import { IUppercasePageView } from './page.model';
import {
  Container,
  Card,
  Title,
  Subtitle,
  Input,
  Label,
  Result,
  ExampleSection,
  ExampleTitle,
  ExampleItem,
  Navigation,
  NavLink
} from './page.style';

export function UppercasePageView({ input, isUppercase, examples, onInputChange }: IUppercasePageView) {
  return (
    <Container>
      <Title>Verificador de Primeira Letra</Title>
      <Subtitle>Verifique se a primeira letra de uma palavra está em maiúscula</Subtitle>

      <Card>
        <div>
          <Label htmlFor="word">Digite uma palavra ou frase</Label>
          <Input
            id="word"
            type="text"
            value={input}
            onChange={onInputChange}
            placeholder="Digite algo..."
          />
        </div>

        {input && (
          <Result isUppercase={isUppercase}>
            {isUppercase ? 'A primeira letra está em maiúscula!' : 'A primeira letra não está em maiúscula'}
          </Result>
        )}

        <ExampleSection>
          <ExampleTitle>Exemplos:</ExampleTitle>
          {examples.map((example, index) => (
            <ExampleItem key={index}>
              <span>{example.input}</span>
              <span>{example.result.toString()}</span>
            </ExampleItem>
          ))}
        </ExampleSection>
      </Card>
      <Navigation>
        <NavLink href="/rickandmorty">← Exercício Anterior</NavLink>
        <NavLink href="/fipe">Próximo Exercício →</NavLink>
      </Navigation>
    </Container>
  );
} 