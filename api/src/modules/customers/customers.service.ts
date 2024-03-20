import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { PrismaService } from 'src/config/prisma.service';

@Injectable()
export class CustomersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCustomerDto: CreateCustomerDto) {
    try {
      return await this.prisma.customer.create({
        data: createCustomerDto,
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.prisma.customer.findMany();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.customer.findUnique({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    try {
      return await this.prisma.customer.update({
        where: { id },
        data: updateCustomerDto,
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.customer.delete({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
