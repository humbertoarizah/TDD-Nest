import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BanksModule } from './banks/banks.module';
import { VendorModule } from './vendor/vendor.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import EnvConfig from './config/app.config';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfig],
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/dev'),
    BanksModule,
    VendorModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
