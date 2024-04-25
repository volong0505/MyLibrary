import { FindPhotoByNameResult, FindPhotosResult } from "../dtos";

export interface PhotoGalleryQuery {
    findByName: (name: string) => Promise<FindPhotoByNameResult>;

    findAll: (page: number, limit: number, sort_column: string, sort_type: 'desc' | 'asc') => Promise<FindPhotosResult>;
}