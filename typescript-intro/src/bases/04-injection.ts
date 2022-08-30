import {
  HttpAdapter,
  PokeApiAdapter,
  PokeApiFetchAdapter,
} from "../api/pokeApi.adapter";
import {
  Move,
  PokeapiResponse,
} from "../interfaces/pokeapi-response.interface";

export class Pokemon {
  constructor(
    public readonly id: number,
    public name: string,
    private readonly http: HttpAdapter
  ) {}

  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  public scream() {
    console.log(`${this.name.toUpperCase()} !!!`);
  }

  public speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  public async getPokemonMoves(): Promise<Move[]> {
    const data = await this.http.get<PokeapiResponse>(
      `https://pokeapi.co/api/v2/pokemon/${this.id}`
    );

    console.log(data.moves);

    return data.moves;
  }
}

const pokeApi = new PokeApiAdapter();
const pokeApiFetchAdapter = new PokeApiFetchAdapter();

export const charmander = new Pokemon(7, "Charmander", pokeApi);
export const newCharmander = new Pokemon(7, "Charmander", pokeApiFetchAdapter);

try {
  const moves = await charmander.getPokemonMoves();
} catch (error) {
  console.log({ error });
}
