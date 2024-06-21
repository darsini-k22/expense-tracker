import {
  Controller,
  Get,
  Logger,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { convertDate, convertToObjectId } from 'src/utils/helperFunctions';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('expense')
export class ExpenseController {
  constructor(
    private readonly expenseService: ExpenseService,
    private readonly logger: Logger,
  ) {}

  @Get()
  async findExpense(@Req() req: any) {
    try {
      const user = req.user;
      const expense = await this.expenseService.findall({
        userId: user.userId,
      });
      return {
        message: 'Success',
        status: 200,
        data: expense,
      };
    } catch (error) {
      this.logger.error('Find Expense', error.message);
      throw error;
    }
  }

  @Post()
  async createExpense(@Req() req: any) {
    try {
      const { body } = req;
      const user = req.user;
      const query = convertToObjectId(
        convertDate({ ...body, userId: user.userId }),
      );
      const expense = await this.expenseService.createExpense(query);
      return {
        message: 'Created Successfully',
        status: 201,
        data: expense,
      };
    } catch (error) {
      this.logger.error('Create Expense', error.message);
      throw error;
    }
  }

  @Put(':id')
  async updateExpense(@Req() req: any, @Param('id') id: string) {
    try {
      const { body } = req;
      const user = req.user;
      const expense = await this.expenseService.updateExpense(id, {
        ...body,
        userId: user.userId,
      });
      return {
        message: 'Updated Successfully',
        status: 200,
        data: expense,
      };
    } catch (error) {
      this.logger.error('Update Expense', error.message);
      throw error;
    }
  }
}
