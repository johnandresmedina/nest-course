import axios from "axios";
import {
  Move,
  PokeapiResponse,
} from "../interfaces/pokeapi-response.interface";

// export class Pokemon {
//   public id: number;
//   public name: string;

//   constructor(id: number, name: string) {
//     this.id = id;
//     this.name = name;
//   }
// }

/**
 * New short way of declaring a class in Typescript
 */
export class Pokemon {
  constructor(public readonly id: number, public name: string) {}

  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  public scream() {
    console.log(`${this.name.toUpperCase} !!!`);
  }

  public speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  public async getPokemonMoves(): Promise<Move[]> {
    const { data } = await axios.get<PokeapiResponse>(
      `https://pokeapi.co/api/v2/pokemon/${this.id}`
    );

    console.log(data.moves);

    return data.moves;
  }
}

export const charmander = new Pokemon(7, "Charmander");
charmander.speak();
charmander.scream();
charmander.getPokemonMoves().then(() => {});

try {
  const moves = await charmander.getPokemonMoves();
} catch (error) {
  console.log({ error });
}
