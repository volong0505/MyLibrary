import { Injectable } from '@nestjs/common';
import { PhotoGalleryQuery } from '../../queries/photo-gallery.query';
import { FindPhotoByNameResult, FindPhotosResult } from '../../dtos';
import { PhotoGalleryEnity } from '@my-library/mongo';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PhotoGalleryQueryImplement implements PhotoGalleryQuery {
  constructor(
    @InjectModel(PhotoGalleryEnity.name)
    private readonly model: Model<PhotoGalleryEnity>
  ) {}

  async findByName(name: string): Promise<FindPhotoByNameResult | null> {
    const entity: PhotoGalleryEnity =
      name !== ''
        ? await this.model.findOne({ 'Information.FileName': name })
        : await this.model.findOne({}).sort({ LastViewed: 'desc' });

    return entity
      ? {
          Information: entity.Information,
          LockedAt: entity.LockedAt,
          UpdatedAt: entity.UpdatedAt,
          UploadedAt: entity.UploadedAt,
          DeletedAt: entity.DeletedAt,
          FavoritedAt: entity.FavoritedAt,
          Tags: entity.Tags,
          PersonIds: entity.PersonIds,
          LastViewed: entity.LastViewed,
        }
      : null;
  }

  async findAll(
    page: number,
    limit: number,
    sort_column: string,
    sort_type: 'asc' | 'desc'
  ): Promise<FindPhotosResult> {
    const raw_data = await this.model
      .find({})
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ sort_column: sort_type });

    return {
      photos: raw_data.map((e) => ({
        file_name: e.Information.FileName,
        original_name: e.Information.OriginalName,
      })),
    };
  }
}
