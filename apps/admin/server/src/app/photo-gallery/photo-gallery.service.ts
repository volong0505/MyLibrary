import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { UpsertPhotosCommand } from './commands/impl/upsert-photos.command';
import { GetDetailPhotoQuery, GetListPhotosQuery } from './queries/impl';
import {
  FavoringPhotosRequest,
  FavoringPhotosResponse,
  GetDetailPhotoRequest,
  GetDetailPhotoResponse,
  GetListPhotosRequest,
  GetListPhotosResponse,
} from '@my-library/api-interfaces';
import { FavoringPhotoCommand } from './commands/impl/favoring-photo.command';
import { PhotoGalleryEnity } from '@my-library/mongo';
import { Config } from 'apps/admin/server/config';
import fs from 'fs';
import { SizeFileUtil } from '@my-library/utils';
import { FindPhotoByNameResult } from './dtos';
import { ViewedPhotoCommand } from './commands/impl/viewed-photo.command';

const photo_gallery_folder = `${Config.WORK_DIR}${Config.PHOTOS_UPLOAD_PATH}`;
const photo_gallery_resize_folder = `${Config.WORK_DIR}${Config.PHOTOS_UPLOAD_RESIZE_PATH}`;

@Injectable()
export class PhotoGalleryService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) {
    this.generatingFolder();
  }

  savePhotos(array_files): Promise<{ message: string }> {
    const files: PhotoGalleryEnity[] = array_files.map((e) => ({
      Information: {
        OriginalName: e.originalname,
        FileName: e.filename,
        Size: e.size,
        MimeType: e.mimetype,
      },
      UploadedAt: new Date(),
    }));

    return this.commandBus.execute(new UpsertPhotosCommand({ files }));
  }

  listPhotos(dto: GetListPhotosRequest): Promise<GetListPhotosResponse> {
    return this.queryBus.execute(new GetListPhotosQuery(dto));
  }

  async detailPhoto(
    dto: GetDetailPhotoRequest
  ): Promise<GetDetailPhotoResponse> {
    const model: FindPhotoByNameResult = await this.queryBus.execute(
      new GetDetailPhotoQuery(dto)
    );
    await this.commandBus.execute(
      new ViewedPhotoCommand({ file_name: model.Information.FileName })
    );
    return {
      file_name: model.Information.FileName,
      original_name: model.Information.OriginalName,
      size: SizeFileUtil.getSizeString(model.Information.Size),
    };
  }

  favoringPhotos(dto: FavoringPhotosRequest): Promise<FavoringPhotosResponse> {
    return this.commandBus.execute(new FavoringPhotoCommand(dto));
  }

  generatingFolder(): void {
    if (!fs.existsSync(photo_gallery_folder))
      fs.mkdirSync(photo_gallery_folder, { recursive: true });
    if (!fs.existsSync(photo_gallery_resize_folder))
      fs.mkdirSync(photo_gallery_resize_folder, { recursive: true });
  }
}
