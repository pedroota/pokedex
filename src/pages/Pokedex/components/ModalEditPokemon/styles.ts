import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const HeaderModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerForm = styled.form`
  margin: auto 0;
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 0.5rem;
  width: 100%;

  > input {
    padding: 0.6rem 1rem;
    border: none;
    border-radius: 0.4rem;
    background-color: #e5e7eb;
    font-size: 1rem;
  }

  > button {
    padding: 0.6rem 1rem;
    background-color: #cc3025;
    color: white;
    border: none;
    border-radius: 0.4rem;
    font-size: 1rem;
  }
`;
