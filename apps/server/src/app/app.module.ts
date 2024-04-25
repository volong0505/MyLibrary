import { Module } from '@nestjs/common';

import { APP_GUARD } from '@nestjs/core';
import { MulterModule } from '@nestjs/platform-express';
import { Config } from 'apps/server/config';
import { MongoModule } from 'libs/infra/mongo/src/lib';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth';
import { AuthGuard } from './auth/auth.guard';
import { PhotoGalleryModule } from './photo-gallery/photo-gallery.module';
import { UsersModule } from './users/users.module';
import { ServeStaticModule } from '@nestjs/serve-static'
const photo_gallery_folder = `${Config.WORK_DIR}${Config.PHOTOS_UPLOAD_PATH}`;

@Module({
  imports: [
    AuthModule,
    UsersModule,
    PhotoGalleryModule,
    MongoModule.register(Config.MONGO_URI),
    MulterModule.register({
      dest: photo_gallery_folder,
    }),
    ServeStaticModule.forRoot({
      rootPath: photo_gallery_folder,
      serveRoot: '/api'
    })
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    }
  ],
})
export class AppModule { }
