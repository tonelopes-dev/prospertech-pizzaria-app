import {
  Body,
  Controller,
  Param,
  Patch,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { UploadProductService } from './upload.service';

// Supondo que o ProductIdParamDto seja realmente apenas um tipo para o ID, vamos simplificar para string ou número.
// Se ProductIdParamDto for um DTO complexo, você precisará ajustar o uso do @Param.

@Controller('uploads/products/file')
export class UploadController {
  constructor(private readonly uploadProductService: UploadProductService) {}

  @Patch('/:id')
  @UseInterceptors(FileInterceptor('file'))
  uploadProductFile(
    @Param('id') id: number, // Aqui assumimos que o ID é uma string. Ajuste conforme necessário.
    @UploadedFile() file: Express.Multer.File,
  ) {
    // Supondo que o método execute espere um ID e um arquivo.
    return this.uploadProductService.execute(id, file);
  }
}
