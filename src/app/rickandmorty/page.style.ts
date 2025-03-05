import styled from 'styled-components';
import Link from 'next/link';

export const Container = styled.main`
  min-height: 100vh;
  background: linear-gradient(to bottom right, #1a202c, #2d3748);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const Card = styled.div`
  max-width: 48rem;
  width: 100%;
  background: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  margin: 1rem 0;
`;

export const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
  color: white;
  text-align: center;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  color: #a0aec0;
  text-align: center;
  margin-bottom: 1rem;
`;

export const CharacterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

export const CharacterCard = styled.div`
  background: #f7fafc;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto 1rem;
`;

export const CharacterInfo = styled.div`
  font-size: 0.875rem;
  color: #4a5568;
  
  p {
    margin: 0.25rem 0;
  }
`;

export const Navigation = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  background-color: #4a5568;
  &:hover {
    background-color: #2d3748;
  }
`;

export const Output = styled.pre`
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: #f7fafc;
  border-radius: 0.375rem;
  font-family: monospace;
  margin-top: 0.5rem;
  white-space: pre-wrap;
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 1rem;

  p {
    color: #1976d2;
    font-size: 1.25rem;
    margin: 0;
  }
`;

export const ErrorMessage = styled.div`
  color: #d32f2f;
  font-size: 1.25rem;
  text-align: center;
  margin: 2rem 0;
  padding: 1rem;
  background-color: #ffebee;
  border-radius: 4px;
`; 