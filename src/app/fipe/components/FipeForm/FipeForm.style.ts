import styled from 'styled-components';
import { FormControl, MenuItem, Button, Box } from '@mui/material';

export const FormContainer = styled(Box)`
  background: white;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
`;

export const StyledFormControl = styled(FormControl)`
  width: 100%;

  .MuiOutlinedInput-root {
    background-color: white;
    border-radius: 4px;
    font-size: 0.875rem;
    color: #1B1B1B;
    
    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: rgba(0, 0, 0, 0.23);
    }

    &.Mui-disabled {
      background-color: #f5f5f5;
    }

    .MuiSelect-select {
      padding: 0.75rem 1rem;
    }
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: #E0E0E0;
  }

  .MuiInputLabel-root {
    color: #7B7B7B;
    font-size: 0.875rem;
    font-weight: 400;
    transform: translate(14px, 16px) scale(1);
    background-color: transparent;

    &.Mui-focused {
      color: #7B7B7B;
    }

    &.MuiInputLabel-shrink {
      transform: translate(14px, -9px) scale(0.75);
      background-color: white;
      padding: 0 4px;
    }
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  font-size: 0.875rem;
  padding: 0.75rem 1rem;
  justify-content: flex-start;
  
  &.MuiMenuItem-root {
    min-height: unset;
  }
`;

export const StyledButton = styled(Button)`
  display: flex;
  width: 60%;
  text-transform: lowercase;
  background-color: #6200EE!important;
  color: white;
  text-transform: none;
  font-weight: 500;
  font-size: 0.875rem;
  font-family: 'Roboto', sans-serif;
  border-radius: 4px;
  box-shadow: none;
  align-items: center;
  justify-content: center;
  text-transform: none!important;

  &:hover, &:active, &:focus {
    background-color: #6200EE!important;
    box-shadow: none;
  }

  &:disabled {
    background-color: #E0E0E0!important;
    color: #9E9E9E!important;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 0.5rem;

  p {
    color: #1976d2;
    font-size: 0.875rem;
    margin: 0;
  }
`;

export const ErrorMessage = styled.div`
  color: #d32f2f;
  font-size: 0.875rem;
  text-align: center;
  margin: 1rem 0;
  padding: 0.5rem;
  background-color: #ffebee;
  border-radius: 4px;
`; 