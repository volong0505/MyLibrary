import { DynamicModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { mongoSchemas } from '.';

@Module({})
export class MongoModule {
  static register(mongoConnectionURI: string): DynamicModule {
    return {
      module: MongoModule,
      imports: [
        MongooseModule.forRoot(mongoConnectionURI),
        MongooseModule.forFeature([
          ...mongoSchemas
        ])
      ],
      exports: [
        MongooseModule
      ]
    }
  }
}
