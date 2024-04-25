import { PhotoGalleryEnity } from "@my-library/mongo";
import { PhotoGallery } from "./photo-gallery";

export interface PhotoGalleryRepository {
    saveMany: (photos: PhotoGallery[]) => Promise<void>;
    saveOne: (photo: PhotoGallery) => Promise<void>;
    findOneByName: (name: string) => Promise<PhotoGallery>

}