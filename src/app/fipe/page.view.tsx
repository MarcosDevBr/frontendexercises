import { IFipePageView } from './page.model';
import {
  StyledContainer,
  Title,
  Subtitle,
  Card,
  Navigation,
  NavLink
} from './page.style';

export function FipePageView({ children }: IFipePageView) {
  return (
    <StyledContainer>
      <Title>Tabela Fipe</Title>
      <Subtitle>
        Consulte o valor de um veículo de forma gratuita
      </Subtitle>
      
      <Card>
        {children}
      </Card>

      <Navigation>
        <NavLink href="/uppercase">← Exercício Anterior</NavLink>
        <NavLink href="/mask">Próximo Exercício →</NavLink>
      </Navigation>
    </StyledContainer>
  );
} 