import { IsNumberString } from 'class-validator';

export const FILM_PHOTO_GET_LIST_API = 'film-photo/get-list';

export class GetListFilmPhotoRequest {
    @IsNumberString()
    page: number;

    sort_column: string;
}