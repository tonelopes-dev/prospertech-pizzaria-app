import { Module } from '@nestjs/common';

import { StorageService } from 'src/config/multer.config';
import { UploadController } from './upload.controller';
import { PrismaService } from 'src/config/prisma.service';
import { OrdersController } from '../orders/orders.controller';
import { ProductController } from '../products/products.controller';
import { UploadProductService } from './upload.service';

@Module({
  controllers: [UploadController],
  providers: [PrismaService, StorageService, UploadProductService],
})
export class UploadPhotoModule {}
