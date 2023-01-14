export interface Pokemon {
  name: string;
  height: string;
  weight: string;
  types: [
    {
      type: {
        name: string;
      };
    }
  ];
  abilities: [
    {
      ability: {
        name: string;
      };
    }
  ];
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    }
  ];
}
