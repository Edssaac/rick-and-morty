import { useApi } from './useApi'
import { EpisodeService, Episode } from '#shared/services/EpisodeService'

export const useEpisodes = () => {
    const service = new EpisodeService()

    return useApi(service, Episode)
}

export { Episode }