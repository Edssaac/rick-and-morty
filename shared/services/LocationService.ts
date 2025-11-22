import { ApiService } from "./ApiService"
import { Location } from "../entities/Location"

export class LocationService extends ApiService<Location> {
    protected endpoint = 'location'
}

export { Location } 