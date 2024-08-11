import { CharacterDto } from "./rick-and-morty.dto"
import { CharacterModel } from "@models/Characters"

export const convertToCharacters = (charactersDto: Array<CharacterDto>): Array<CharacterModel> =>  {
    return charactersDto.map((character) => {
      // const {name, id, created_at} = character
      return {
        name: character.name,
        id: character.id,
        createdAt: character.created,
      }
    })
  }
