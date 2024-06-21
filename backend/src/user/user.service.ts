import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly logger: Logger,
  ) {}

  async findAll(filterQuery: any, projectQuery: any) {
    try {
      const users = await this.userModel.find(filterQuery);
      return users;
    } catch (error) {
      this.logger.error('User Find All', error.message);
      throw error;
    }
  }

  async findOne(filterQuery: any, projectQuery: any) {
    try {
      filterQuery['_id'] = new mongoose.Types.ObjectId(filterQuery['_id']);
      const user = await this.userModel.find(filterQuery);
      return user;
    } catch (error) {
      this.logger.error('User Find One', error.message);
      throw error;
    }
  }
}
