import { useState } from 'react';
import { usePokemons } from '~/stores/pokemon';
import { CardPokemon, Container, HeaderPokedex, ListingCardPokemon } from './styles';
import { ChevronLeft, Edit, Trash } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import { ModalEditPokemon } from './components/ModalEditPokemon';

export function Pokedex() {
  const [isEditing, setIsEditing] = useState(false);
  const [currentPokemon, setCurrentPokemon] = useState('');
  const navigate = useNavigate();
  const pokemons = usePokemons((state) => state.pokemons);
  const deletePokemon = usePokemons((state) => state.deletePokemon);

  const goBackToHome = () => navigate('/');

  return (
    <Container>
      <HeaderPokedex onClick={goBackToHome}>
        <ChevronLeft /> Voltar
      </HeaderPokedex>

      <ListingCardPokemon>
        {pokemons &&
          pokemons.map(({ name, description, image, _id }) => (
            <CardPokemon key={_id}>
              <img src={image} alt={name} />

              <span>
                <h4>{name}</h4>
                <p>{description}</p>
              </span>

              <div>
                <Edit
                  onClick={() => {
                    setCurrentPokemon(_id);
                    setIsEditing((prevState) => !prevState);
                  }}
                />
                <Trash onClick={() => deletePokemon(_id)} />
              </div>
            </CardPokemon>
          ))}
      </ListingCardPokemon>

      <ModalEditPokemon isOpen={isEditing} setIsOpen={setIsEditing} currentPokemon={currentPokemon} />
    </Container>
  );
}
