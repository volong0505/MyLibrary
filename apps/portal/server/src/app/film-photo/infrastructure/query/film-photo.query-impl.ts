import { Injectable } from "@nestjs/common";
import { FindFilmPhotoByNameResult, FindFilmPhotosResult } from "../../dtos";
import { FilmPhotoQuery } from "../../queries/film-photo.query";
import { InjectModel } from '@nestjs/mongoose';
import { PhotoGalleryEnity } from '@my-library/mongo';
import { Model } from "mongoose";
@Injectable()
export class FilmPhotoQueryImplement implements FilmPhotoQuery {

    constructor(
        @InjectModel(PhotoGalleryEnity.name)
        private readonly model: Model<PhotoGalleryEnity>
    ) { }

    findByName: (name: string) => Promise<FindFilmPhotoByNameResult>;
    
    async findAll(page: number, sort_column: string): Promise<FindFilmPhotosResult> {
        const limit = 20;
        const raw_data = await this.model
            .find({})
            .skip((page - 1) * limit)
            .limit(limit)
            .sort({ sort_column: 'desc' })

        return {
            film_photos: raw_data.map((e) => ({
                file_name: e.Information.FileName,
                origin_name: e.Information.OriginalName
            }))
        }
    }
}