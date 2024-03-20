import { Injectable } from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/config/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}
  async create(createProductDto: CreateProductDTO) {
    try {
      return await this.prisma.product.create({
        data: { ...createProductDto },
      });
    } catch (error) {
      console.error(error);
      throw new Error('Failed to create product.');
    }
  }

  async findAll() {
    try {
      return await this.prisma.product.findMany();
    } catch (error) {
      console.error(error);
      throw new Error('Failed to retrieve products.');
    }
  }

  async findOne(id: number) {
    try {
      const product = await this.prisma.product.findUnique({ where: { id } });
      if (!product) {
        throw new Error(`Product with ID ${id} not found.`);
      }
      return product;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to retrieve product.');
    }
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    try {
      return await this.prisma.product.update({
        where: { id },
        data: { ...updateProductDto },
      });
    } catch (error) {
      console.error(error);
      throw new Error('The product could not be updated.');
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.product.delete({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      throw new Error('The product could not be removed.');
    }
  }
}
