import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 0.8rem 0;
`;

export const Listing = styled.section`
  max-width: max-content;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

export const ButtonNavigatePages = styled.button`
  all: unset;
  background-color: #08234d;
  color: white;
  padding: 0.6rem 1.5rem;
  border-radius: 0.3rem;
  cursor: pointer;
`;
