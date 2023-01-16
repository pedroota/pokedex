import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
`;

export const HeaderPokedex = styled.button`
  all: unset;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem 1rem;
  margin: 0.6rem 0;
  gap: 0.5rem;
`;

export const ListingCardPokemon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin: 2rem 0;
`;

export const CardPokemon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e5e7eb;
  padding: 0.5rem 2rem 0.5rem 0.5rem;
  border-radius: 0.6rem;

  > span,
  > div {
    display: inherit;
    flex-direction: column;
    gap: 0.5rem;
    text-transform: capitalize;
  }
`;
