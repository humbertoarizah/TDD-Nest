import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BanksModule } from './banks/banks.module';
import { VendorModule } from './vendor/vendor.module';

@Module({
  imports: [BanksModule, VendorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
