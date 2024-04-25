import { IsNotEmpty } from "class-validator";

export const PHOTO_GALLERY_GET_DETAIL_API = 'photo-gallery/get-detail';

export class GetDetailPhotoRequest {

    file_name: string
}

export class GetDetailPhotoResponse {
    file_name: string;
    original_name: string;
    size: string
}