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
  max-width: 32rem;
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

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  margin-top: 0.5rem;
  min-height: 100px;
  font-family: monospace;
  &:focus {
    outline: none;
    border-color: #4299e1;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #4a5568;
  margin-bottom: 0.5rem;
`;

export const Button = styled.button`
  background-color: #4299e1;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  margin-top: 1rem;
  &:hover {
    background-color: #3182ce;
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

export const ExampleSection = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: #f7fafc;
  border-radius: 0.375rem;
  font-family: monospace;
  font-size: 0.875rem;
`;

export const ExampleTitle = styled.h3`
  font-size: 1rem;
  color: #4a5568;
  margin-bottom: 0.5rem;
`; 