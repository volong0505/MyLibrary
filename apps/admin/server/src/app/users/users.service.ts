import { Injectable, UnauthorizedException } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetUserQuery } from './queries/impl';
import { Users } from 'libs/infra/mongo/src/lib';
import { GetUserDto } from './interfaces';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersSerivce {
  constructor(
    private readonly queryBus: QueryBus,
    private jwtService: JwtService
  ) {}

  async findOne(user_name: string): Promise<Users> {
    const dto: GetUserDto = {
      user_name: user_name,
    };
    return this.queryBus.execute(new GetUserQuery(dto));
  }

  async getUser(res) {
    try {
      const cookie = res.cookies['access_token'];
      const data = await this.verifyToken(cookie);
      const user = await this.findOne(data.username);

      return user;
    } catch (err) {
      throw new UnauthorizedException();
    }
  }

  async verifyToken(cookie: string) {
    return this.jwtService.verifyAsync(cookie);
  }
}
