import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  createdAt: Date;
  updatedAt: Date;
  @Prop({
    type: String,
    unique: true,
    index: true,
    trim: true,
    lowercase: true,
    required: true,
  })
  email: string;
  @Prop({ type: String, select: false })
  password: string;
  @Prop({ type: String })
  resetToken: string;
  @Prop({ type: Number })
  resetTokenExpiry: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
