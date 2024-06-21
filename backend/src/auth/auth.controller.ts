import { Body, Controller, Logger, Post, Put } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly logger: Logger,
  ) {}

  @Post('/register')
  async registerUser(@Body() body: any) {
    try {
      const user = await this.authService.registerUser(body);
      return user;
    } catch (error) {
      this.logger.error('register error:', error.message);
      throw error;
    }
  }

  @Put('login')
  async loginUser(@Body() body: any) {
    try {
      const user = await this.authService.loginUser(body);
      return user;
    } catch (error) {
      this.logger.error(error.message);
      throw error;
    }
  }
}
