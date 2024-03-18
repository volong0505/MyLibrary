import { Module } from "@nestjs/common";
import { usersQueries } from "./queries";
import { UsersSerivce } from "./users.service";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersSchemaFeature } from "libs/infra/mongo/src/lib";
import { CqrsModule } from "@nestjs/cqrs";
import { UsersController } from "./users.controller";

@Module({
    imports: [
        MongooseModule.forFeature([
            UsersSchemaFeature
        ]),
        CqrsModule
    ],
    providers: [
        ...usersQueries,
        UsersSerivce
    ],
    controllers: [
        UsersController
    ],
    exports: [
        UsersSerivce
    ]
})
export class UsersModule {}