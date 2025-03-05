import styled from 'styled-components';
import Link from 'next/link';

export const StyledContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  height: 100vh;
  background-color: #F9F6FC;
  padding: 2rem;
  margin: 0;
  box-sizing: border-box;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
  color: #1B1B1B;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
`;

export const Subtitle = styled.span`
  text-align: center;
  color: #1B1B1B;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  white-space: nowrap;
  margin-bottom: 10px;
`;

export const Card = styled.div`
  background: white;
  padding: 1.5rem;
  width: 100%;
  max-width: 360px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  margin-top: 10px;
`;

export const Navigation = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const NavLink = styled(Link)`
  color: #666;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: #eee;
  &:hover {
    background-color: #ddd;
  }
`; 