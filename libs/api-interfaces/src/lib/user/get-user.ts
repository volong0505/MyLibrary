import { UserDto } from "./dto";

export const GET_USER_API = 'user/get';

export interface GetUserResponse {
    data: UserDto
}