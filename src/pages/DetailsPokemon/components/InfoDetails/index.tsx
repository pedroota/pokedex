import { useNavigate } from 'react-router-dom';
import { Badge } from '~/components/Badge';
import { ButtonGroup } from '~/components/ButtonGroup';
import { usePokemonCaptureChances } from '~/hooks/usePokemonCaptureChances';
import { Pokemon } from '~/interfaces/pokemon.interface';
import { BodyInfoDetails, Container, HeaderInfoDetails, ListItem, CatchPokemonButton, ButtonNavigate } from './styles';

export function InfoDetails({ name, weight, types, abilities, height, stats }: Pokemon) {
  const navigate = useNavigate();
  const { chancesCapture } = usePokemonCaptureChances({ stats });

  const goBackHomePage = () => navigate('/');

  return (
    <Container>
      <HeaderInfoDetails>
        <p>{name}</p>
        <ButtonGroup>
          {types.map((type) => (
            <Badge key={type.type.name} variant="secondary">
              {type.type.name}
            </Badge>
          ))}
        </ButtonGroup>
      </HeaderInfoDetails>

      <BodyInfoDetails>
        <ButtonGroup>
          <Badge>
            <p>{weight}Kg</p>
          </Badge>
          <Badge>
            <p>Height {height}</p>
          </Badge>
          {stats.map((stat) => (
            <Badge key={stat.stat.name}>
              <p>
                {stat.stat.name} {stat.base_stat}
              </p>
            </Badge>
          ))}
        </ButtonGroup>

        <h3>Abilities</h3>
        <ul>
          {abilities.map((ability) => (
            <ListItem key={ability.ability.name}>{ability.ability.name}</ListItem>
          ))}
        </ul>

        <h3>Catch Pokemon</h3>
        <CatchPokemonButton>
          Catch Pokemon <span>{chancesCapture.toFixed(2)}%</span>
        </CatchPokemonButton>
        <ButtonNavigate onClick={goBackHomePage}>Go back</ButtonNavigate>
      </BodyInfoDetails>
    </Container>
  );
}
