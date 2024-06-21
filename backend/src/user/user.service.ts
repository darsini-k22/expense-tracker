import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { convertToObjectId } from 'src/utils/helperFunctions';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly logger: Logger,
  ) {}

  async findAll(filterQuery: any, projectQuery: any = {}) {
    try {
      const users = await this.userModel.find(filterQuery, projectQuery);
      return users;
    } catch (error) {
      this.logger.error('User Find All', error.message);
      throw error;
    }
  }

  async findOne(filterQuery: any, projectQuery: any = {}) {
    try {
      filterQuery = convertToObjectId(filterQuery);
      const user = await this.userModel.findOne(filterQuery, projectQuery);
      return user;
    } catch (error) {
      this.logger.error('User Find One', error.message);
      throw error;
    }
  }

  async createUser(createQuery: any) {
    try {
      const hashpassword = await bcrypt.hash(createQuery.password, 10);
      const user = await this.userModel.create({
        ...createQuery,
        password: hashpassword,
      });
      return user;
    } catch (error) {
      this.logger.error('Create user One', error.message);
      throw error;
    }
  }

  async updateUser(id: string, updateQuery: any) {
    try {
      const obid = convertToObjectId({ _id: id });
      await this.userModel.updateOne({ _id: obid }, { $set: updateQuery });
    } catch (error) {
      this.logger.error('Update One user', error.message);
      throw error;
    }
  }
}
