import { Module } from '@nestjs/common';
import { usersQueries } from './queries';
import { UsersSerivce } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CqrsModule } from '@nestjs/cqrs';
import { UsersController } from './users.controller';
import { UsersSchemaFeature } from '@my-library/mongo';
@Module({
  imports: [MongooseModule.forFeature([UsersSchemaFeature]), CqrsModule],
  providers: [...usersQueries, UsersSerivce],
  controllers: [UsersController],
  exports: [UsersSerivce],
})
export class UsersModule {}
