import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type ExpenseDocument = HydratedDocument<Expense>;

@Schema()
export class Expense {
  @Prop({ type: String })
  title: string;

  @Prop({ type: Number })
  amount: number;

  @Prop({ type: Date })
  date: Date;

  @Prop({ type: mongoose.Types.ObjectId })
  userId: mongoose.Types.ObjectId;
}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);
