import { Api } from "./Api"

export class Location extends Api {
    public type?: string
    public dimension?: string
    public residents?: string[]

    constructor(data: Partial<Location> = {}) {
        super(data)
        this.type = data.type
        this.dimension = data.dimension
        this.residents = data.residents
    }
}
