import { X } from 'react-feather';
import { SetStateAction } from 'react';
import Modal from 'react-modal';
import { Container, ContainerForm, HeaderModal } from './styles';
import { useForm } from 'react-hook-form';
import { usePokemons } from '~/stores/pokemon';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface ModalEditPokemonProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  currentPokemon: string;
}

interface updateDataPokemon {
  name: string;
  description: string;
}

const schema = yup
  .object({
    name: yup.string().required().min(3).max(8),
    description: yup.string().required().min(3).max(20)
  })
  .required();

export function ModalEditPokemon({ isOpen, setIsOpen, currentPokemon }: ModalEditPokemonProps) {
  const updatePokemon = usePokemons((state) => state.updatePokemon);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<updateDataPokemon>({ resolver: yupResolver(schema) });

  const onSubmit = handleSubmit((pokemon) => {
    updatePokemon(currentPokemon, pokemon);
    reset();
    setIsOpen((prevState) => !prevState);
  });

  return (
    <Modal isOpen={isOpen} onRequestClose={() => setIsOpen((prevState) => !prevState)}>
      <Container>
        <HeaderModal>
          <h3>Editar Pokemon</h3>
          <X onClick={() => setIsOpen((prevState) => !prevState)} />
        </HeaderModal>
        <ContainerForm onSubmit={onSubmit}>
          <input type="text" placeholder="Nome" {...register('name')} />
          <label>{errors.name?.message}</label>
          <input type="text" placeholder="Descrição" max="40" {...register('description')} />
          <label>{errors.description?.message}</label>
          <button type="submit">Concluido</button>
        </ContainerForm>
      </Container>
    </Modal>
  );
}
