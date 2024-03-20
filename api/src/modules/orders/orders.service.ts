import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/config/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createOrderDto: CreateOrderDto) {
    try {
      return await this.prisma.order.create({
        data: { ...createOrderDto },
      });
    } catch (error) {
      console.error(error);
      throw new Error('Failed to create order.');
    }
  }

  async findAll() {
    try {
      return await this.prisma.order.findMany();
    } catch (error) {
      console.error(error);
      throw new Error('Failed to retrieve orders.');
    }
  }

  async findOne(id: number) {
    try {
      const order = await this.prisma.order.findUnique({
        where: { id },
      });
      if (!order) {
        throw new NotFoundException(`Order with ID "${id}" not found.`);
      }
      return order;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to retrieve order.');
    }
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    try {
      return await this.prisma.order.update({
        where: { id },
        data: { ...updateOrderDto },
      });
    } catch (error) {
      throw new NotFoundException(`Order with ID "${id}" not found.`);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.order.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Order with ID "${id}" not found.`);
    }
  }
}
