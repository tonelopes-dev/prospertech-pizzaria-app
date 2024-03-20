import { Module } from '@nestjs/common';

import { ProductModule } from './modules/products/products.module';
import { OrdersModule } from './modules/orders/orders.module';
import { CustomersModule } from './modules/customers/customers.module';
import { UploadPhotoModule } from './modules/upload/upload.module';

@Module({
  imports: [ProductModule, OrdersModule, CustomersModule, UploadPhotoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
