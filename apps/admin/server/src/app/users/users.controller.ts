import { Controller, Get, Req } from '@nestjs/common';
import { GET_USER_API } from '@my-library/api-interfaces';
import { UsersSerivce } from './users.service';
import { Public } from '../auth/require-permission.decorator';

@Controller()
export class UsersController {
  constructor(private readonly service: UsersSerivce) {}

  @Public()
  @Get(GET_USER_API)
  getUser(@Req() req: Request) {
    return this.service.getUser(req);
  }
}
