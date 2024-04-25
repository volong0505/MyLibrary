import { IsNumberString } from 'class-validator';

export const PHOTO_GALLERY_GET_LIST_API = 'photo-gallery/get-list';

export class GetListPhotosRequest {
    @IsNumberString()
    page: number;

    @IsNumberString()
    limit: number;

    sort_column?: string;
    
    sort_type?: 'asc' | 'desc'
}

export interface Photos_Item {
    original_name: string;
    file_name: string;
};


export interface GetListPhotosResponse {
    photos: Photos_Item[]
}