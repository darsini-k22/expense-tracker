import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail } from 'class-validator';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ type: String })
  @IsEmail()
  email: string;

  @Prop({ type: String })
  password: string;

  @Prop({ type: Date })
  loggedIn: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
