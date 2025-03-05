import { IFipeFormView } from './FipeForm.model';
import {
  FormContainer,
  StyledFormControl,
  StyledMenuItem,
  StyledButton,
  ErrorMessage,
  LoadingContainer
} from './FipeForm.style';
import { InputLabel, Select, CircularProgress } from '@mui/material';

export function FipeFormView({
  brands,
  models,
  years,
  brand,
  model,
  year,
  isLoading,
  error,
  onBrandChange,
  onModelChange,
  onYearChange,
  onSubmit
}: IFipeFormView) {
  if (error) {
    return (
      <FormContainer>
        <ErrorMessage>
          {error}
          <br />
          <small>Por favor, tente novamente mais tarde.</small>
        </ErrorMessage>
      </FormContainer>
    );
  }

  return (
    <FormContainer>
      {isLoading && (
        <LoadingContainer>
          <CircularProgress />
          <p>Carregando marcas...</p>
        </LoadingContainer>
      )}
      <StyledFormControl>
        <InputLabel>Marca</InputLabel>
        <Select
          value={brand}
          label="Marca"
          onChange={(e) => onBrandChange(e.target.value as string)}
          disabled={isLoading}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 300
              }
            }
          }}
        >
          {brands.map((brand) => (
            <StyledMenuItem key={brand.codigo} value={brand.codigo}>
              {brand.nome}
            </StyledMenuItem>
          ))}
        </Select>
      </StyledFormControl>

      <StyledFormControl>
        <InputLabel>Modelo</InputLabel>
        <Select
          value={model}
          label="Modelo"
          onChange={(e) => onModelChange(e.target.value as string)}
          disabled={!brand || isLoading}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 300
              }
            }
          }}
        >
          {models.map((model) => (
            <StyledMenuItem key={model.codigo} value={model.codigo}>
              {model.nome}
            </StyledMenuItem>
          ))}
        </Select>
      </StyledFormControl>

      {model && (
        <StyledFormControl>
          <InputLabel>Ano</InputLabel>
          <Select
            value={year}
            label="Ano"
            onChange={(e) => onYearChange(e.target.value as string)}
            disabled={!model || isLoading}
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 300
                }
              }
            }}
          >
            {years.map((year) => (
              <StyledMenuItem key={year.codigo} value={year.codigo}>
                {year.nome}
              </StyledMenuItem>
            ))}
          </Select>
        </StyledFormControl>
      )}

      <StyledButton
        variant="contained"
        disabled={!brand || !model || !year || isLoading}
        onClick={onSubmit}
      >
        {isLoading ? 'Carregando...' : 'Consultar preço'}
      </StyledButton>
    </FormContainer>
  );
} 