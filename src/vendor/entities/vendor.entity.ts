import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId, PopulatedDoc, Types } from 'mongoose';
import { Bank } from 'src/banks/entities/bank.entity';
@Schema({
  timestamps: true,
})
export class Vendor extends Document {
  _id: ObjectId;
  createdAt: Date;
  updatedAt: Date;
  @Prop({ type: String, required: true })
  name: string;
  @Prop({ type: String, required: false, validate: /(^[0-9]+-{1}[0-9]{1})/g })
  id: string;
  @Prop({ type: String, required: true })
  contactName: string;
  @Prop({ type: String, required: false, maxlength: 10 })
  mobile: string;
  @Prop({ type: Types.ObjectId, required: true, ref: 'Bank' })
  bank: ObjectId | PopulatedDoc<Bank>;
  @Prop({ type: String, required: false, maxlength: 15 })
  bankAccount: string;
}

export const VendorSchema = SchemaFactory.createForClass(Vendor);
