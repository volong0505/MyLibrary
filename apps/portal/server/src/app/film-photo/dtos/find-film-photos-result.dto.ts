import { IQueryResult } from "@nestjs/cqrs";

export class FindFilmPhotosResult implements IQueryResult {
    constructor(
        readonly film_photos: Readonly<{
            file_name: string
        }>[]
    ) {}
}