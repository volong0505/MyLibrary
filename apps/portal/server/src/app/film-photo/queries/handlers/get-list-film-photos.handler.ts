import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetListFilmPhotosQuery } from "../impl/get-list-film-photos.query";
import { Inject } from "@nestjs/common";
import { FilmPhotoInjectionToken } from "../../film-photo.injection-token";
import { FilmPhotoQuery } from "../film-photo.query";

@QueryHandler(GetListFilmPhotosQuery)
export class GetListFilmPhotosHandler implements IQueryHandler<GetListFilmPhotosQuery> {
  
    @Inject(FilmPhotoInjectionToken.FILM_PHOTO_QUERY) readonly query: FilmPhotoQuery;

    execute(query: GetListFilmPhotosQuery): Promise<any> {
        const { page, sort_column } = query.dto;

        return this.query.findAll(page, sort_column);
    }
    
}