import { PhotoGallery_Information } from "@my-library/mongo";
import { UnprocessableEntityException } from "@nestjs/common";
import { AggregateRoot } from "@nestjs/cqrs";
import { Types } from "mongoose";

export type PhotoGalleryEssentialProperties = Readonly<
    Required<{
        _id: string;
        Information: PhotoGallery_Information;
    }>
>

export type PhotoGalleryOptionalProperties = Readonly<
    Partial<{
        LockedAt: Date | null;
        UpdatedAt: Date;
        UploadedAt: Date;
        DeletedAt: Date | null;
        FavoritedAt: Date | null;
        Tags: string[];
        PersonIds: string[];
        LastViewed: Date | null
    }>
>;

export type PhotoGalleryProperties = PhotoGalleryEssentialProperties & Required<PhotoGalleryOptionalProperties>;

export interface PhotoGallery {    delete: () => void;
    lock: () => void;
    favorite: () => void;

    restore: () => void;  
    unlock: () => void;
    unfavorite: () => void;

    viewed: () => void;

    commit: () => void;
}

export class PhotoGalleryImplement extends AggregateRoot implements PhotoGallery {
    private readonly _id: string;
    private readonly Information: PhotoGallery_Information;
    private LockedAt: Date | null;
    private UpdatedAt: Date;
    private readonly UploadedAt: Date;
    private DeletedAt: Date | null;
    private FavoritedAt: Date | null;
    private Tags: [];
    private PersonIds: [];
    private LastViewed: Date | null;

    constructor(properties: PhotoGalleryProperties) {
        super();
        Object.assign(this, properties)
    }

    delete():  void {
        if (this.LockedAt)
            throw new UnprocessableEntityException('Photo is already deleted');
        this.LockedAt = new Date();
        this.UpdatedAt = new Date();
    };

    viewed(): void {
        this.LastViewed = new Date();
    }

    lock: () => void;
    
    favorite(): void {
        if (this.FavoritedAt)
            throw new UnprocessableEntityException('Photo is already favorited')
    };

    restore: () => void;
    unlock: () => void;
    unfavorite: () => void;

}