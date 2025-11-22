import { Api } from "./Api"

interface Origin {
    name?: string
    url?: string
}

interface Location {
    name?: string
    url?: string
}

export class Character extends Api {
    public status?: string
    public species?: string
    public type?: string
    public gender?: string
    public origin?: Origin
    public location?: Location
    public image?: string
    public episode?: string[]

    constructor(data: Partial<Character> = {}) {
        super(data)
        this.status = data.status
        this.species = data.species
        this.type = data.type
        this.gender = data.gender
        this.origin = data.origin
        this.location = data.location
        this.image = data.image
        this.episode = data.episode
    }
}