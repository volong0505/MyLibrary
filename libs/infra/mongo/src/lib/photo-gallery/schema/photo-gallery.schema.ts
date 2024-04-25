import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
export class PhotoGallery_Information  {
    OriginalName: string;
    FileName: string;
    Size: number;
    MimeType: string;
}

@Schema({ collection: 'PhotoGallery'})
export class PhotoGalleryEnity {

    @Prop() _id: string;
    @Prop() Information: PhotoGallery_Information;

    @Prop() Tags: string[];
    @Prop() PersonIds: string[];

    @Prop() LastViewed: Date;
    @Prop() UploadedAt: Date;
    @Prop() UpdatedAt: Date;
    @Prop() FavoritedAt: Date;
    @Prop() DeletedAt: Date;
    @Prop() LockedAt: Date
}

export const PhotoGallerySchema = SchemaFactory.createForClass(PhotoGalleryEnity);

export const PhotoGallerySchemaFeature: ModelDefinition = {
    name: PhotoGalleryEnity.name,
    schema: PhotoGallerySchema
}