import { IUpdatePageView, IExample } from './page.model';
import {
  Container,
  Card,
  Title,
  Subtitle,
  TextArea,
  Label,
  Button,
  Output,
  Navigation,
  NavLink,
  ExampleSection,
  ExampleTitle
} from './page.style';

export function UpdatePageView({
  currentObject,
  newData,
  result,
  examples,
  onCurrentObjectChange,
  onNewDataChange,
  onUpdate
}: IUpdatePageView) {
  return (
    <Container>
      <Title>Exercício de Atualização de Objeto</Title>
      <Subtitle>Atualize as propriedades do objeto mantendo a estrutura</Subtitle>

      <Card>
        <div>
          <Label>Objeto Base (JSON)</Label>
          <TextArea
            value={currentObject}
            onChange={onCurrentObjectChange}
            placeholder="Digite o objeto base..."
          />
        </div>

        <div style={{ marginTop: '1rem' }}>
          <Label>Dados de Atualização (JSON)</Label>
          <TextArea
            value={newData}
            onChange={onNewDataChange}
            placeholder="Digite os dados de atualização..."
          />
        </div>

        <Button onClick={onUpdate}>Atualizar Objeto</Button>

        <div style={{ marginTop: '1rem' }}>
          <Label>Resultado</Label>
          <Output>{result}</Output>
        </div>

        <ExampleSection>
          <ExampleTitle>Exemplos:</ExampleTitle>
          {examples.map((example: IExample, index: number) => (
            <div key={index} style={{ marginBottom: '1rem' }}>
              <div>Entrada 1: {JSON.stringify(example.current)}</div>
              <div>Entrada 2: {JSON.stringify(example.update)}</div>
              <div>Resultado: {JSON.stringify(example.result)}</div>
            </div>
          ))}
        </ExampleSection>
      </Card>
      <Navigation>
        <NavLink href="/mask">← Exercício Anterior</NavLink>
        <NavLink href="/rickandmorty">Próximo Exercício →</NavLink>
      </Navigation>
    </Container>
  );
} 