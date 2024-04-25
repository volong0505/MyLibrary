import { GetListPhotosRequest } from "@my-library/api-interfaces";

export class GetListPhotosQuery {
    constructor(
        public readonly dto: GetListPhotosRequest
    ) {}
}