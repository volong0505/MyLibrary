import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmPhotoModule } from './film-photo/film-photo.module';

@Module({
  imports: [
    FilmPhotoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
