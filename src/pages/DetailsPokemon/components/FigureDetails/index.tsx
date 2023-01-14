import { Container, OrderPokemon } from './styles';

interface FigureDetailsProps {
  imageUrl: string;
  order: string;
}

export function FigureDetails({ imageUrl, order }: FigureDetailsProps) {
  return (
    <Container>
      <img src={imageUrl} alt="Pokemon Image" />
      <OrderPokemon>
        <p>{`${order}`.padStart(3, '0')}</p>
      </OrderPokemon>
    </Container>
  );
}
