import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { StorageService } from 'src/config/multer.config';
import { PrismaService } from 'src/config/prisma.service';

@Injectable()
export class UploadProductService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly storageService: StorageService,
  ) {}

  async execute(product_id: number, file: Express.Multer.File) {
    try {
      // Certifique-se de que product_id é um número.
      const numericProductId = Number(product_id);

      const productExists = await this.prismaService.product.findFirst({
        where: { id: numericProductId },
      });

      if (!productExists) {
        return new HttpException(
          'Product not found it.',
          HttpStatus.BAD_REQUEST,
        );
      }

      //multer
      const savedImage = await this.storageService.storageImage(
        productExists.id,
        file.originalname,
        file.buffer,
        file.mimetype,
      );

      const updatedProduct = await this.prismaService.product.update({
        where: { id: productExists.id },
        data: { imageUrl: savedImage.Location },
      });

      return updatedProduct;
    } catch (error) {
      console.log(error);
      return new HttpException(
        'Unexpected error:',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
