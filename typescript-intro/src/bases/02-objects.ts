export const pokemonIds = [1, 20, 30, 34, 66];

interface Pokemon {
  id: number;
  name: string;
  age?: number;
  properties: string[];
}

export const pokemon: Pokemon = {
  id: 1,
  name: "Bulbasaur",
  properties: ["Hunt"],
};

export const pokemons: Pokemon[] = [];

pokemons.push({ id: 7, name: "Mew", properties: ["Not defined"] });
