import { baseInstance } from './instance';

class PokemonService {
  async getPokemon() {
    try {
      const res = await baseInstance.get('/pokemon?limit=10&offset=0');

      return res.data;
    } catch (error) {
      throw error;
    }
  }
}

export const pokemonService = new PokemonService();
