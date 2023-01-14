import { Badge } from '~/components/Badge';
import { ButtonGroup } from '~/components/ButtonGroup';
import { Pokemon } from '~/interfaces/pokemon.interface';
import { BpdyInfoDetails, Container, HeaderInfoDetails, ListItem } from './styles';

export function InfoDetails({ name, weight, types, abilities, height, stats }: Pokemon) {
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

      <BpdyInfoDetails>
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
      </BpdyInfoDetails>
    </Container>
  );
}
