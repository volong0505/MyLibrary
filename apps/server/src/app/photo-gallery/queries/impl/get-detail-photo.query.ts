import { GetDetailPhotoRequest } from "@my-library/api-interfaces";

export class GetDetailPhotoQuery {
    constructor(
        public readonly dto: GetDetailPhotoRequest
    ) {}
}