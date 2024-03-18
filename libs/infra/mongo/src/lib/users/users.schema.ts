import { ModelDefinition, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";


@Schema({ collection: "Users"})
export class Users {
    @Prop() _id: Types.ObjectId;
    @Prop() UserName: string;
    @Prop() Password: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);

export const UsersSchemaFeature: ModelDefinition = {
    name: Users.name,
    schema: UsersSchema
}