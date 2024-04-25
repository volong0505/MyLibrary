import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { UpsertPhotosCommand } from "../impl/upsert-photos.command";
import { InjectModel } from "@nestjs/mongoose";
import { PhotoGalleryEnity } from "@my-library/mongo";
import { Model } from "mongoose";
import { BadRequestException } from "@nestjs/common";

@CommandHandler(UpsertPhotosCommand)
export class UpsertPhotosHandler implements ICommandHandler<UpsertPhotosCommand> {
    constructor(
        @InjectModel(PhotoGalleryEnity.name) private readonly model: Model<PhotoGalleryEnity>
    ){}

    async execute(command: UpsertPhotosCommand): Promise<{message: string}> {
        try {
            const { files } = command.dto;
            await this.model.insertMany(files);
        } catch (error) {
            throw new BadRequestException(error.message)
        }
    return {
        message: "Upload files is success"
    }
    }
}