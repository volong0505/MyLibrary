import {
  FavoringPhotosRequest,
  FavoringPhotosResponse,
  GetDetailPhotoRequest,
  GetDetailPhotoResponse,
  GetListPhotosRequest,
  GetListPhotosResponse,
  PHOTO_GALLERY_FAVORING_PHOTOS_API,
  PHOTO_GALLERY_GET_DETAIL_API,
  PHOTO_GALLERY_GET_LIST_API,
  PHOTO_GALLERY_GET_RESIZE_API,
  UPLOAD_PHOTOS_API,
} from '@my-library/api-interfaces';
import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Put,
  Query,
  Res,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Config } from 'apps/server/config';
import fs from 'fs';
import { diskStorage } from 'multer';
import { parse } from 'path';
import sharp from 'sharp';
import { v4 as uuidv4 } from 'uuid';
import { PhotoGalleryService } from './photo-gallery.service';
import { error } from 'console';

const photo_gallery_folder = `${Config.WORK_DIR}${Config.PHOTOS_UPLOAD_PATH}`;
const photo_gallery_resize_folder = `${Config.WORK_DIR}${Config.PHOTOS_UPLOAD_RESIZE_PATH}`;

export const storage = {
  storage: diskStorage({
    destination: photo_gallery_folder,
    filename(req, file, cb) {
      const filename: string =
        parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
      const extension: string = parse(file.originalname).ext;
      cb(null, `${filename}${extension}`);
    },
  }),
};

@Controller()
export class PhotoGalleryController {
  constructor(private readonly service: PhotoGalleryService) {}

  @Post(UPLOAD_PHOTOS_API)
  @UseInterceptors(FilesInterceptor('files', 50, storage))
  uploadPhoto(@UploadedFiles() files: Array<Express.Multer.File>) {
    return this.service.savePhotos(files);
  }

  @Get(PHOTO_GALLERY_GET_LIST_API)
  getList(
    @Query() params: GetListPhotosRequest
  ): Promise<GetListPhotosResponse> {
    return this.service.listPhotos(params);
  }

  @Get(PHOTO_GALLERY_GET_DETAIL_API)
  getDetail(
    @Query() params: GetDetailPhotoRequest
  ): Promise<GetDetailPhotoResponse> {
    return this.service.detailPhoto(params);
  }

  @Get(PHOTO_GALLERY_GET_RESIZE_API)
  getImage(@Query() params: any, @Res() response) {
    const { file_name } = params;
    const resize_file_path =
      photo_gallery_resize_folder + '/resize_' + file_name;
    if (fs.existsSync(resize_file_path)) {
      return response.sendFile(resize_file_path);
    }
    sharp(photo_gallery_folder + '/' + file_name)
      .rotate()
      .resize(600)
      .jpeg({ mozjpeg: true })
      .toFile(resize_file_path)
      .then((data) => {
        return response.sendFile(resize_file_path);
      })
      .catch((err) => {
        throw new BadRequestException(err);
      });
  }

  @Post(PHOTO_GALLERY_FAVORING_PHOTOS_API)
  favoringPhotos(
    @Body() body: FavoringPhotosRequest
  ): Promise<FavoringPhotosResponse> {
    return this.service.favoringPhotos(body);
  }
}
