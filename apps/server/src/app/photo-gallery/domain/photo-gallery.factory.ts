import { PhotoGallery_Information } from "@my-library/mongo";
import { Inject } from "@nestjs/common";
import { EventPublisher } from "@nestjs/cqrs";
import { Types } from "mongoose";
import { PhotoGallery, PhotoGalleryImplement, PhotoGalleryProperties } from "./photo-gallery";

type CreatePhotoOptions = Readonly<{
    _id: string
    Information: PhotoGallery_Information;
    Tags: [],
    PersonIds: [],
}>

export class PhotoGalleryFactory {
    @Inject(EventPublisher) private readonly eventPublisher: EventPublisher;

    create(options: CreatePhotoOptions): PhotoGallery {
        return this.eventPublisher.mergeObjectContext(
            new PhotoGalleryImplement ({
                ...options,
                LastViewed: null,
                UploadedAt: new Date(),
                UpdatedAt: new Date(),
                FavoritedAt:null,
                DeletedAt: null,
                LockedAt: null,
            })
        )
    }

    reconstitute(properties: PhotoGalleryProperties): PhotoGallery {
        return new PhotoGalleryImplement(properties)
        
    }
}