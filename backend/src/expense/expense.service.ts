import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Expense } from './schemas/expense.schema';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class ExpenseService {
  constructor(
    @InjectModel(Expense.name) private expenseModel: Model<Expense>,
    private readonly logger: Logger,
  ) {}

  async findall(filterQuery: any, projectQuery: any) {
    try {
      const expenses = await this.expenseModel.find(filterQuery, projectQuery);
      return expenses;
    } catch (error) {
      this.logger.error(error.message);
      throw error;
    }
  }

  async findOne(filterQuery: any, projectQuery: any) {
    try {
      filterQuery['_id'] = new mongoose.Types.ObjectId(filterQuery['_id']);
      filterQuery['userId'] = new mongoose.Types.ObjectId(
        filterQuery['userId'],
      );
      const expenses = await this.expenseModel.findOne(
        filterQuery,
        projectQuery,
      );
      return expenses;
    } catch (error) {
      this.logger.error(error.message);
      throw error;
    }
  }
}
