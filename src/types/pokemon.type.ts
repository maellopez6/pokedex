export interface IEvolutionNode {
  pokedex_id: number;
  name: string;
  condition?: string | null;
}

export interface IType {
  name: string;
  image: string;
}

export interface ITalent {
  name: string;
  tc: boolean;
}

export interface IStats {
  hp: number;
  atk: number;
  def: number;
  spe_atk: number;
  spe_def: number;
  vit: number;
  [key: string]: number;
}

export interface IResistance {
  name: string;
  multiplier: number;
}

export interface ISprites {
  regular: string | null;
  shiny: string | null;
  gmax: string | null;
  [key: string]: string | null;
}

export interface IPokemonNames {
  fr?: string;
  en?: string;
  jp?: string;
  [locale: string]: string | undefined;
}

export interface IPokemonData {
  pokedex_id: number;
  generation: number;
  category: string;
  name: IPokemonNames;
  sprites: ISprites;
  types: IType[];
  talents: ITalent[];
  stats: IStats;
  resistances: IResistance[];
  evolution: {
    pre: IEvolutionNode | null;
    next: IEvolutionNode[];
  };
  [key: string]: unknown;
}

export interface ITyradexPokemon {
  id: number;
  name: {
    fr: string;
  };
  sprites: {
    regular: string;
  };
}
