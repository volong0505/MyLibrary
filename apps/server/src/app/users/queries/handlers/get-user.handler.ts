import { InjectModel } from "@nestjs/mongoose";
import { GetUserQuery } from "../impl/get-user.query";
import { Users } from "libs/infra/mongo/src/lib";
import { Model } from "mongoose";
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(GetUserQuery)
export class GetUserHandler implements IQueryHandler<GetUserQuery> {
    constructor(
        @InjectModel(Users.name)
        private readonly model: Model<Users>
    ) {}
    
    async execute(query: GetUserQuery): Promise<Users> {
        const { user_name } = query.dto;

        return this.model.findOne({
            UserName: user_name
        })
    }
}