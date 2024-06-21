import { Controller, Logger } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly logger: Logger,
    private readonly userService: UserService,
  ) {}
}
