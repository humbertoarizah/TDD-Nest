import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';
@Schema({
  timestamps: true,
})
export class Bank extends Document {
  _id: ObjectId;
  createdAt: Date;
  updatedAt: Date;
  @Prop({ type: String, required: true, maxlength: 50 })
  name: string;
}

export const BankSchema = SchemaFactory.createForClass(Bank);
