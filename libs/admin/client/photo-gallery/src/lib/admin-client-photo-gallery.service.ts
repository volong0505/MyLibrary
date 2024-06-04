import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FavoringPhotosRequest, GetDetailPhotoRequest, GetDetailPhotoResponse, GetListPhotosRequest, GetListPhotosResponse, PHOTO_GALLERY_FAVORING_PHOTOS_API, PHOTO_GALLERY_GET_DETAIL_API, PHOTO_GALLERY_GET_LIST_API, UPLOAD_PHOTOS_API } from '@my-library/api-interfaces';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class AdminClientPhotoGalleryService {
    constructor(
        private readonly http: HttpClient
    ){}

    uploadFiles(formData: FormData): Observable<{message: string}> {
        return this.http.post<{message: string}>(UPLOAD_PHOTOS_API, formData, {withCredentials: true})
    }

    getListPhotos(dto: GetListPhotosRequest) {
        const params = {
            page: dto.page,
            limit: dto.limit
        }
        return this.http.get<GetListPhotosResponse>(PHOTO_GALLERY_GET_LIST_API, {params: {...params}, withCredentials: true}).pipe(
            map(res => {
                const response: GetListPhotosResponse = res || {};
                
                return response
            })
        )
    }

    getDetailPhoto(dto: GetDetailPhotoRequest) {
        const params = {
            file_name: dto.file_name
        }
        return this.http.get<GetDetailPhotoResponse>(PHOTO_GALLERY_GET_DETAIL_API, { params: {...params}, withCredentials: true}).pipe(
            map(res => {
                const response: GetDetailPhotoResponse = res || {};

                return response
            })
        )
    }

    favoring(dto: FavoringPhotosRequest) {
        return this.http.post(PHOTO_GALLERY_FAVORING_PHOTOS_API, dto, { withCredentials: true})
    }
}