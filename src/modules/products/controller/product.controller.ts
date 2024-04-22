import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IProductService } from '../service/product/product.service.interface';
import { CreateProductDto } from '../dto/create-product.dto';
import { GetProductDto } from '../dto/get-product.dtp';

@ApiTags('Product')
@Controller('product')
export class ProductController implements IProductService {
  @Get()
  @ApiOperation({ summary: 'Get Product' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get product by ID',
    type: GetProductDto,
  })
  getProduct(id: string): GetProductDto {
    throw new Error('Method not implemented.');
  }
  createProduct(product: CreateProductDto): GetProductDto {
    throw new Error('Method not implemented.');
  }
  updateProduct(): GetProductDto {
    throw new Error('Method not implemented.');
  }
  listProducts(): GetProductDto[] {
    throw new Error('Method not implemented.');
  }
}
