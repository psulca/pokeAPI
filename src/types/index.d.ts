export default interface Pokemons {
  pokemons: {
    results: Pokemon[];
  };
}

export interface Pokemon {
  name: string;
  url: string;
  order: number;
  base_experience: number;
  height: number;
  abilities: Ability[];
  types: Types[];
  sprites: Sprites;
}

export interface Sprites {
  other: {
    dream_world: {
      front_default: string;
    };
  }
}
export interface Types {
  type: {
    name: string;
  };
}

export interface Ability {
  ability: {
    name: string;
  };
}
