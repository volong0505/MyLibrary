import { GetUserDto } from "../../interfaces";

export class GetUserQuery {
    constructor(
        public readonly dto: GetUserDto
        ) { }
}