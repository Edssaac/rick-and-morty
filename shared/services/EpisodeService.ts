import { ApiService } from "./ApiService"
import { Episode } from "../entities/Episode"

export class EpisodeService extends ApiService<Episode> {
    protected endpoint = 'episode'
}

export { Episode }