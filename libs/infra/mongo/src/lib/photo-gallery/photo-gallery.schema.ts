import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({ collection: 'PhotoGallery'})
export class PhotoGallery {
    @Prop() _id: Types.ObjectId;
}

export const PhotoGallerySchema = SchemaFactory.createForClass(PhotoGallery);

export const PhotoGallerySchemaFeature: ModelDefinition = {
    name: PhotoGallery.name,
    schema: PhotoGallerySchema
}