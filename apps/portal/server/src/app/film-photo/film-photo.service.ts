import { Injectable } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";

@Injectable()
export class FilmPhotoService {
    
    constructor (
        private readonly queryBus: QueryBus,
        private readonly commandBus: CommandBus
    ) {}
    
}