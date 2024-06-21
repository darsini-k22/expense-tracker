import { Body, Controller, Logger, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly logger: Logger,
    private readonly userService: UserService,
  ) {}

  @Post('/register')
  async registerUser(@Body() body: Request) {
    try {
      this.userService.createUser(body);
    } catch (error) {
      this.logger.error(error.message);
      throw error;
    }
  }

  @Put('/login')
  async loginUser(@Body() body: Request) {
    try {
      const user = await this.userService.loginUser(body);
      return user;
    } catch (error) {
      this.logger.error(error.message);
      throw error;
    }
  }
}
