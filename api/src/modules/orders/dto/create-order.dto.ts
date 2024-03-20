import {
  IsBoolean,
  IsDateString,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateOrderDto {
  @IsString()
  status: string;

  @IsNumber()
  total: number;

  @IsInt()
  customerId: number;

  // Optional since not all orders might have a delivery address or payment method at creation
  @IsString()
  @IsOptional()
  deliveryAddress?: string;

  @IsString()
  @IsOptional()
  paymentMethod?: string;

  @IsBoolean()
  @IsOptional()
  isPaid?: boolean;

  @IsBoolean()
  @IsOptional()
  isDelivered?: boolean;

  // Optional since not all orders might have a delivery date at creation
  @IsDateString()
  @IsOptional()
  deliveryDate?: string;
}

export class ResponseOrderDto extends CreateOrderDto {
  @IsNumber()
  id: number;
}

export class IdOrderDto implements Partial<ResponseOrderDto> {
  @IsNumber()
  id: number;
}
