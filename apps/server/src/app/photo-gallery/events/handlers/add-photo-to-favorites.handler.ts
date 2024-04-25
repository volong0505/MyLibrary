import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { AddPhotoToFavoritesEvent } from "../impl";
import * as clc from 'cli-color';

@EventsHandler(AddPhotoToFavoritesEvent)
export class AddPhotoToFavoritesHandler implements IEventHandler<AddPhotoToFavoritesEvent> {
    handle(event: AddPhotoToFavoritesEvent) {
        console.log(clc.greenBright('AddPhotoToFavoritesEvent'))
    }
}