import { PhotoGallerySchemaFeature } from './photo-gallery/schema';
import { UsersSchemaFeature } from './users';

export * from './photo-gallery/schema';
export * from './users';
export * from './mongo.module';

export const mongoSchemas = [
    PhotoGallerySchemaFeature,
    UsersSchemaFeature
]