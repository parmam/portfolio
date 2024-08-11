import axios, { AxiosResponse } from "axios";
import { RickAndMortyRoute } from "./rick-and-morty.route";
import { CharactersResponse } from "./rick-and-morty.dto";

interface RickAndMortyServices {
  getCharacters(page: number): Promise<CharactersResponse>;
}

const RickAndMortyService: RickAndMortyServices = {
  getCharacters: async (page) => {
    try {
      const result: AxiosResponse<CharactersResponse> = await axios.get(RickAndMortyRoute.getAllCharacters(page));
      if (result.status === 200) {
        return result.data;
      } else {
        throw new Error(result.status.toString());
      }
    } catch (error) {
      console.error(error)
      throw new Error('Error getting characters');
    }
  },
};

export default RickAndMortyService;


