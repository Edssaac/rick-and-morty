import type { ApiService, ApiOptions, ApiPaginatedResponse } from '#shared/services/ApiService'

export const useApi = <T extends object>(service: ApiService<T>, Entity: new () => T) => {
    const items = reactive<ApiPaginatedResponse<T>>({
        info: {
            count: 0,
            pages: 0,
            next: null,
            prev: null
        },
        results: []
    })

    const item = reactive<T>(new Entity())

    const isLoading = ref(false)
    const error = ref<string | null>(null)

    const fetchAll = async (options?: ApiOptions) => {
        isLoading.value = true
        error.value = null

        try {
            const response = await service.list(options)

            Object.assign(items, response)
        } catch (errorMessage) {
            error.value = errorMessage as string
        } finally {
            isLoading.value = false
        }
    }

    const fetchSelection = async (selection?: number[]) => {
        isLoading.value = true
        error.value = null

        if (selection === undefined) {
            selection = [...Array(8)].map((_, i) => i + 1)
        }

        try {
            const response = await service.shortedList(selection)

            Object.assign(items.results, response)
        } catch (errorMessage) {
            error.value = errorMessage as string
        } finally {
            isLoading.value = false
        }
    }

    const fetchOne = async (id: string) => {
        isLoading.value = true
        error.value = null

        try {
            const response = await service.find(id)

            Object.assign(item, response)
        } catch (errorMessage) {
            error.value = errorMessage as string
        } finally {
            isLoading.value = false
        }
    }

    return {
        items,
        item,
        isLoading,
        error,

        fetchAll,
        fetchSelection,
        fetchOne,
    }
}
