import styled from 'styled-components';
import { Typography } from '@mui/material';

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #E1F5EC;
  padding: 1rem;
`;

export const ResultCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  text-align: center;
  background-color: #E1F5EC;
`;

export const Title = styled.h2`
  font-size: 20px;
  color: #1B1B1B;
  margin-bottom: 1rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const Price = styled(Typography)`
  width: fit-content;
  color: #FFFFFF;
  font-weight: 500;
  font-size: 2rem;
  margin: 0.75rem 0;
  font-family: 'Roboto', sans-serif;
  background-color: #00a28b;
  padding: 6px 12px;
  border-radius: 20px;
`;

export const Subtitle = styled.span`
  color: #7C7C7C;
  font-size: 0.875rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  margin-top: 10px;
`;

export const Navigation = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

export const NavButton = styled.button`
  color: #666;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #eee;
  border: none;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    background-color: #ddd;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 1rem;
`; 