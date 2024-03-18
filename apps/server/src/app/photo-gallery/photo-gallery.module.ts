import { Module } from "@nestjs/common";
import { PhotoGalleryController } from "./photo-gallery.controller";

@Module({
    imports: [],
    controllers: [
        PhotoGalleryController
    ],
    providers: []
})
export class PhotoGalleryModule {}