import { LoginReponse, LoginRequest } from "@my-library/api-interfaces";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { addDays } from "date-fns";
import { Users } from "libs/infra/mongo/src/lib";
import { UsersSerivce } from "../users/users.service";

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersSerivce,
        private readonly jwtService: JwtService
    ) {}

    async signIn(dto: LoginRequest, res): Promise<LoginReponse> {
        await new Promise(f => setTimeout(f, 1000));

        const { username, password, remember } = dto;
        const user: Users = await this.usersService.findOne(username);
        if (user?.Password !== password) {
            throw new UnauthorizedException("Username or password is incorrect")        
        }
        const payload = {sub: user._id, username: user.UserName}

        const access_token = await this.jwtService.signAsync(payload)

        res.cookie('access_token', access_token, {
            httpOnly: true,
            expires: remember ? addDays(new Date(), 7) : addDays(new Date(), 1)
        })

        return {
            message: 'Login Successfully!'
        }
    }
} 