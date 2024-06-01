import { PhotoGalleryEnity } from '@my-library/mongo';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  PhotoGallery,
  PhotoGalleryFactory,
  PhotoGalleryProperties,
  PhotoGalleryRepository,
} from '../../domain';

export class PhotoGalleryRepositoryImplement implements PhotoGalleryRepository {
  constructor(
    @InjectModel(PhotoGalleryEnity.name)
    private readonly model: Model<PhotoGalleryEnity>,
    private readonly factory: PhotoGalleryFactory
  ) {}

  saveMany: (photos: PhotoGallery[]) => Promise<void>;

  async saveOne(photo: PhotoGallery): Promise<void> {
    const entity = this.modelToEntity(photo);
    delete entity._id;
    await this.model.updateOne(
      { 'Information.FileName': entity.Information.FileName },
      entity
    );
  }

  async findOneByName(name: string): Promise<PhotoGallery> {
    const entity: PhotoGalleryEnity =
      name !== ''
        ? await this.model.findOne({ 'Information.FileName': name }).lean()
        : await this.model.findOne({}).sort({ LastViewed: 'desc' }).lean();
    return entity ? this.entityToModel(entity) : null;
  }

  async findAll(
    page: number,
    limit: number,
    sort_column,
    sort_type
  ): Promise<PhotoGalleryEnity[]> {
    return this.model
      .find({})
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ sort_column: sort_type });
  }

  private entityToModel(entity: PhotoGalleryEnity): PhotoGallery {
    return this.factory.reconstitute({
      ...entity,
    });
  }

  private modelToEntity(model: PhotoGallery): PhotoGalleryEnity {
    const properties = JSON.parse(
      JSON.stringify(model)
    ) as PhotoGalleryProperties;

    return {
      ...properties,
    };
  }
}
