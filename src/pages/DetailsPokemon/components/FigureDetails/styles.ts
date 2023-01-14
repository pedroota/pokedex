import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;

  > img {
    width: 100%;
    max-width: 18.7rem;
    margin-top: 3rem;
  }
`;

export const OrderPokemon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 2.5rem;
  max-height: 2.5rem;
  padding: 0.8rem;
  margin: 1rem;
  background-color: #08234d;
  border-radius: 50%;

  > p {
    color: white;
    font-size: 1.2rem;
  }
`;
