import { GetListFilmPhotoRequest } from '@my-library/portal-api-interfaces'

export class GetListFilmPhotosQuery {
    constructor (
        public readonly dto: GetListFilmPhotoRequest
    ) {}
}