import { GetListPhotosResponse } from "@my-library/api-interfaces";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import clc from "cli-color";
import { GetListPhotosQuery } from "../impl";
import { Inject } from "@nestjs/common";
import { PhotoGalleryQuery } from "../photo-gallery.query";
const port = process.env.PORT || 3333;
import { InjectionToken } from "../../photo-gallery.injection-token";
import { FindPhotosResult } from "../../dtos";

@QueryHandler(GetListPhotosQuery)
export class GetListPhotosHandler implements IQueryHandler<GetListPhotosQuery> {
    
    @Inject(InjectionToken.PHOTO_GALLERY_QUERY) readonly query: PhotoGalleryQuery


    async execute(query: GetListPhotosQuery): Promise<FindPhotosResult> {
        console.log(clc.yellowBright('Async GetListPhotosQuery...'));

        const { page, limit, sort_column = "Information.UploadAt", sort_type = 'desc'} = query.dto;
        
        return this.query.findAll(page, limit, sort_column, sort_type)
    }
}