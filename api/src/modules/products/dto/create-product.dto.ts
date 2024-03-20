import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateProductDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsString()
  category: string;

  @IsNotEmpty()
  quantityStock: number;

  @IsOptional()
  @IsString()
  imageUrl?: string;
}

export class ResponseProduct extends CreateProductDTO {
  @IsNumber()
  id: number;
}

export class ProductIdParamDto implements Partial<ResponseProduct> {
  @IsNumber()
  id: number;
}
