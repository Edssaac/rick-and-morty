import { useRuntimeConfig } from '#imports'

export interface ApiPaginatedResponse<T> {
    info: {
        count: number
        pages: number
        next: string | null
        prev: string | null
    }
    results: T[]
}

export interface ApiOptions {
    page?: number
}

export abstract class ApiService<T> {
    protected api
    protected abstract endpoint: string

    constructor() {
        const config = useRuntimeConfig()

        this.api = $fetch.create({
            baseURL: config.public.apiBaseUrl as string,
            headers: { 'Content-Type': 'application/json' }
        })
    }

    async list(options?: ApiOptions): Promise<ApiPaginatedResponse<T>> {
        let endpoint = this.endpoint

        if (options?.page) {
            endpoint += `?page=${options.page}`
        }

        return await this.api<ApiPaginatedResponse<T>>(`${endpoint}`)
    }

    async shortedList(multiple?: Number[]): Promise<T[]> {
        let endpoint = this.endpoint

        if (multiple && multiple.length > 0) {
            endpoint += `/[${multiple.join(',')}]`

            return await this.api(`${endpoint}`)
        }

        return []
    }

    async find(id: string): Promise<T> {
        return await this.api(`${this.endpoint}/${id}`)
    }
}
