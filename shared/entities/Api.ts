export class Api {
    id?: number
    name?: string
    url?: string
    created?: string

    constructor(data: Partial<Api> = {}) {
        this.id = data.id
        this.name = data.name
        this.url = data.url
        this.created = data.created
    }
}
