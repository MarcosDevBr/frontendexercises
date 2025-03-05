import { IMaskPageView } from './page.model';
import {
  Container,
  Card,
  Title,
  Subtitle,
  Input,
  Label,
  MaskedOutput,
  Footer,
  Navigation,
  NavLink
} from './page.style';

export function MaskPageView({ input, maskedValue, onInputChange }: IMaskPageView) {
  return (
    <Container>
      <div>
        <Title>Demonstração de Máscara de Texto</Title>
        <Subtitle>Digite qualquer texto para ver a máscara</Subtitle>
        
        <Card>
          <div>
            <Label htmlFor="input">Digite o Texto</Label>
            <Input
              id="input"
              type="text"
              value={input}
              onChange={onInputChange}
              placeholder="Digite algo..."
            />
          </div>
          
          <div style={{ marginTop: '1.5rem' }}>
            <Label>Resultado com Máscara</Label>
            <MaskedOutput>{maskedValue}</MaskedOutput>
          </div>
        </Card>

        <Footer>
          <p>Apenas os últimos 4 caracteres permanecerão visíveis</p>
        </Footer>
      </div>
      <Navigation>
        <NavLink href="/update">Próximo Exercício →</NavLink>
      </Navigation>
    </Container>
  );
} 