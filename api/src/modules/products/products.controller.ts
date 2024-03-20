import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductService } from './products.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('/')
export class ProductController {
  constructor(private readonly productsService: ProductService) {}

  @Post('/products')
  create(@Body() createProductDto: CreateProductDTO) {
    return this.productsService.create(createProductDto);
  }

  @Get('/products')
  findAll() {
    return this.productsService.findAll();
  }

  @Get('/products/:id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch('/products/:id')
  update(@Param('id') id: string, @Body() updatePizzaDto: UpdateProductDto) {
    return this.productsService.update(+id, updatePizzaDto);
  }

  @Delete('/products/:id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
