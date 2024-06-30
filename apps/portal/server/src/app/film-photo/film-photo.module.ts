import { Module, Provider } from "@nestjs/common";
import { FilmPhotoInjectionToken } from "./film-photo.injection-token";
import { FilmPhotoQueryImplement } from "./infrastructure";
import { CqrsModule } from "@nestjs/cqrs";
import { PhotoGallerySchemaFeature } from "@my-library/mongo";
import { MongooseModule } from '@nestjs/mongoose';
import { FilmPhotoController } from "./film-photo.controller";
import { FilmPhotoService } from "./film-photo.service";
import { film_photo_queries } from "./queries";

const infrastructure: Provider[] = [
    {
        provide: FilmPhotoInjectionToken.FILM_PHOTO_QUERY,
        useClass: FilmPhotoQueryImplement
    }
]

@Module({
    imports: [
        CqrsModule,
        MongooseModule.forFeature([PhotoGallerySchemaFeature]),
    ],
    controllers: [FilmPhotoController],
    providers: [
        FilmPhotoService,
        ...infrastructure,
        ...film_photo_queries
    ]
})
export class FilmPhotoModule {}