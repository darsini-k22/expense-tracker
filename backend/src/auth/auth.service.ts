import {
  Injectable,
  Logger,
  UnprocessableEntityException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly logger: Logger,
    private jwtService: JwtService,
  ) {}

  async loginUser(body: any) {
    try {
      const user = await this.userService.findOne({ email: body.email });
      if (!user) {
        throw new UnprocessableEntityException();
      }
      const isPassword = await bcrypt.compare(body.password, user.password);
      if (!isPassword) {
        return { message: 'Incorrect Password', status: 401 };
      }
      await this.userService.updateUser(user.id, { loggedIn: Date.now() });
      const updatedUser = await this.userService.findOne(
        { _id: user._id },
        { password: 0 },
      );
      const payload = { userId: updatedUser._id, email: updatedUser.email };
      return {
        data: updatedUser,
        token: await this.jwtService.signAsync(payload, {
          secret: process.env.SECRETE_KEY,
        }),
      };
    } catch (error) {
      this.logger.error('Login user', error.message);
      throw error;
    }
  }

  async registerUser(body: any) {
    try {
      const user = await this.userService.findOne({ email: body.email });
      if (user) {
        throw new UnprocessableEntityException('User already exists');
      }

      if (!body.password) {
        throw new UnprocessableEntityException('Password is required');
      }
      await this.userService.createUser(body);

      return { message: 'User Created Successfully', status: 200 };
    } catch (error) {
      this.logger.error('Register user', error.message);
      throw error;
    }
  }
}
