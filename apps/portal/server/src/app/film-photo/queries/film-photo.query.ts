import { FindFilmPhotoByNameResult, FindFilmPhotosResult } from "../dtos";

export interface FilmPhotoQuery {
    findByName: (name: string) => Promise<FindFilmPhotoByNameResult>;

    findAll: (
        page: number,
        sort_column: string
    ) => Promise<FindFilmPhotosResult>
}   