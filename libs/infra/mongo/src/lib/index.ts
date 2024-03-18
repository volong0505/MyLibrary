import { PhotoGallerySchemaFeature } from './photo-gallery';
import { UsersSchemaFeature } from './users';

export * from './photo-gallery';
export * from './users';
export * from './mongo.module';

export const mongoSchemas = [
    PhotoGallerySchemaFeature,
    UsersSchemaFeature
]