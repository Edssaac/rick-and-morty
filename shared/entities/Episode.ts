import { Api } from "./Api"

export class Episode extends Api {
    public air_date?: string
    public episode?: string
    public characters?: string[]

    constructor(data: Partial<Episode> = {}) {
        super(data)
        this.air_date = data.air_date
        this.episode = data.episode
        this.characters = data.characters
    }
}
