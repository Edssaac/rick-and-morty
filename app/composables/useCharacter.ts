import { useApi } from './useApi'
import { CharacterService, Character } from '#shared/services/CharacterService'

export const useCharacters = () => {
    const service = new CharacterService()

    return useApi(service, Character)
}

export { Character }