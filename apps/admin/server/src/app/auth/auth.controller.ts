import {
  LOGIN_API,
  LoginReponse,
  LoginRequest,
} from '@my-library/api-interfaces';
import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { Public } from './require-permission.decorator';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  // @HttpCode(HttpStatus.OK)
  @Public()
  @Post(LOGIN_API)
  signIn(
    @Body() signInDto: LoginRequest,
    @Res({ passthrough: true }) res: Response
  ): Promise<LoginReponse> {
    return this.authService.signIn(signInDto, res);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
