import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Expense } from './schemas/expense.schema';
import { Model } from 'mongoose';
import { convertDate, convertToObjectId } from 'src/utils/helperFunctions';

@Injectable()
export class ExpenseService {
  constructor(
    @InjectModel(Expense.name) private expenseModel: Model<Expense>,
    private readonly logger: Logger,
  ) {}

  async findall(filterQuery: any, projectQuery: any = {}) {
    try {
      filterQuery = convertToObjectId(filterQuery);
      const expenses = await this.expenseModel.find(filterQuery, projectQuery);
      return expenses;
    } catch (error) {
      this.logger.error(error.message);
      throw error;
    }
  }

  async findOne(filterQuery: any, projectQuery: any = {}) {
    try {
      filterQuery = convertToObjectId(filterQuery);
      const expenses = await this.expenseModel.findOne(
        filterQuery,
        projectQuery,
      );
      return expenses;
    } catch (error) {
      this.logger.error('Find expense', error.message);
      throw error;
    }
  }

  async createExpense(createQuery: any) {
    try {
      createQuery = convertToObjectId(createQuery);
      const expense = await this.expenseModel.create(createQuery);
      return expense;
    } catch (error) {
      this.logger.error('Create Expense:', error.message);
      throw error;
    }
  }

  async updateExpense(id: string, updateQuery: any) {
    try {
      id = convertToObjectId({ _id: id });
      updateQuery = convertDate(updateQuery);
      await this.expenseModel.updateOne({ _id: id }, updateQuery);
    } catch (error) {
      this.logger.error('Update Expense:', error.message);
      throw error;
    }
  }
}
