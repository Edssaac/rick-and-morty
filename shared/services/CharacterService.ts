import { ApiService } from "./ApiService"
import { Character } from "../entities/Character"

export class CharacterService extends ApiService<Character> {
    protected endpoint = 'character'
}

export { Character }