import { IResultPageView } from './page.model';
import {
  ResultContainer,
  ResultCard,
  Title,
  Price,
  Subtitle,
  Navigation,
  NavButton,
  LoadingContainer
} from './page.style';
import { CircularProgress } from '@mui/material';

export function ResultPageView({ isLoading, error, vehicleValue, onBack }: IResultPageView) {
  if (isLoading) {
    return (
      <ResultContainer>
        <ResultCard>
          <LoadingContainer>
            <CircularProgress />
            <Title>Carregando valor do veículo...</Title>
          </LoadingContainer>
        </ResultCard>
      </ResultContainer>
    );
  }

  if (error) {
    return (
      <ResultContainer>
        <ResultCard>
          <Title style={{ color: '#d32f2f' }}>{error}</Title>
          <NavButton onClick={onBack}>
            Voltar
          </NavButton>
        </ResultCard>
      </ResultContainer>
    );
  }

  if (!vehicleValue) {
    return null;
  }

  return (
    <ResultContainer>
      <ResultCard>
        <Title>
          Tabela Fipe: Preço {vehicleValue.Marca} {vehicleValue.Modelo} {vehicleValue.AnoModelo}
        </Title>
        <Price>{vehicleValue.Valor}</Price>
        <Subtitle>
          Este é o preço de compra do veículo
        </Subtitle>
      </ResultCard>
      <Navigation>
        <NavButton onClick={onBack}>
          ← Anterior
        </NavButton>
      </Navigation>
    </ResultContainer>
  );
} 