import { Controller } from "@nestjs/common";
import { FilmPhotoService } from "./film-photo.service";

@Controller()
export class FilmPhotoController {

    constructor (
        private readonly service: FilmPhotoService
    ) {}
}