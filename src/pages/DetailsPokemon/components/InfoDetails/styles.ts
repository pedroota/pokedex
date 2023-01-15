import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  background-color: #e5e7eb;
  padding: 1rem;
`;

export const HeaderInfoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  > p {
    font-weight: 800;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

export const BodyInfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

export const ListItem = styled.li`
  text-transform: capitalize;

  & + li {
    margin-top: 0.5rem;
  }
`;

export const CatchPokemonButton = styled.button`
  all: unset;
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
  text-align: center;
  background-color: #374151;
  color: white;

  > span {
    font-weight: 600;
  }
`;

export const ButtonNavigate = styled.button`
  all: unset;
  color: gray;
  font-weight: 600;
  text-align: center;
`;
