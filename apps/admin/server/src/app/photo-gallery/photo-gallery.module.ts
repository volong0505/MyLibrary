import { Module, Provider } from '@nestjs/common';
import { PhotoGalleryController } from './photo-gallery.controller';
import { PhotoGalleryService } from './photo-gallery.service';
import { photo_gallery_commands } from './commands';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { PhotoGallerySchemaFeature } from '@my-library/mongo';
import { photo_gallery_queries } from './queries';
import { photo_gallery_events } from './events';
import { InjectionToken } from './photo-gallery.injection-token';
import { PhotoGalleryRepositoryImplement } from './infrastructure/repository/photo-gallery.repository-impl';
import { PhotoGalleryQueryImplement } from './infrastructure/query/photo-gallery.query-impl';
import { PhotoGalleryFactory } from './domain';

const infrastructure: Provider[] = [
  {
    provide: InjectionToken.PHOTO_GALLERY_REPOSITORY,
    useClass: PhotoGalleryRepositoryImplement,
  },
  {
    provide: InjectionToken.PHOTO_GALLERY_QUERY,
    useClass: PhotoGalleryQueryImplement,
  },
];

const domain = [PhotoGalleryFactory];

@Module({
  imports: [CqrsModule, MongooseModule.forFeature([PhotoGallerySchemaFeature])],
  controllers: [PhotoGalleryController],
  providers: [
    PhotoGalleryService,
    ...photo_gallery_commands,
    ...photo_gallery_queries,
    ...photo_gallery_events,
    ...infrastructure,
    ...domain,
  ],
})
export class PhotoGalleryModule {}
