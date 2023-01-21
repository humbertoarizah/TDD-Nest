import { IsMongoId, IsOptional, IsString } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateVendorDto {
  @IsString()
  name: string;
  @IsString()
  @IsOptional()
  id: string;
  @IsString()
  contactName: string;
  @IsString()
  @IsOptional()
  mobile: string;
  @IsMongoId()
  bank: ObjectId;
  @IsString()
  @IsOptional()
  bankAccount: string;
}
