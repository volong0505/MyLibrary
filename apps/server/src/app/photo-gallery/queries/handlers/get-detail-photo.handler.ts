import { BadRequestException, Inject } from "@nestjs/common";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import clc from "cli-color";
import { FindPhotoByNameResult } from "../../dtos";
import { InjectionToken } from "../../photo-gallery.injection-token";
import { GetDetailPhotoQuery } from "../impl";
import { PhotoGalleryQuery } from "../photo-gallery.query";

@QueryHandler(GetDetailPhotoQuery)
export class GetDetailPhotoHandler implements IQueryHandler<GetDetailPhotoQuery, FindPhotoByNameResult> {
    
    @Inject(InjectionToken.PHOTO_GALLERY_QUERY) readonly query: PhotoGalleryQuery

    async execute(query: GetDetailPhotoQuery): Promise<FindPhotoByNameResult> {
        console.log(clc.yellowBright('Async GetDetailPhotoQuery...'));

        const { file_name } = query.dto;

        const raw_data = await this.query.findByName(file_name)

        if (!raw_data) {
            throw new BadRequestException('Not found data!')
        }

        return {
            Information: raw_data.Information,
            LockedAt: raw_data.LockedAt,
            UpdatedAt: raw_data.UpdatedAt,
            UploadedAt: raw_data.UploadedAt,
            DeletedAt: raw_data.DeletedAt,
            FavoritedAt: raw_data.FavoritedAt,
            Tags: raw_data.Tags,
            PersonIds: raw_data.PersonIds,
            LastViewed: raw_data.LastViewed
        }
    }
}