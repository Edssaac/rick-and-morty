import { useApi } from './useApi'
import { LocationService, Location } from '#shared/services/LocationService'

export const useLocations = () => {
    const service = new LocationService()

    return useApi(service, Location)
}

export { Location }