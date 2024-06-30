import { IQueryResult } from '@nestjs/cqrs';

export class FindFilmPhotoByNameResult implements IQueryResult {
    constructor(
        readonly film_photo: Readonly<{
            file_name: string;
        }>
    ) {}
}