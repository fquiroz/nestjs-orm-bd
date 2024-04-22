import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IProductService } from '../service/product/product.service.interface';
import { CreateProductDto } from '../dto/create-product.dto';
import { ProductService } from '../service/product/product.service';
import { UpdateProductDto } from '../dto/update-product.dto';
import { ETalle } from 'src/common/interfaces/product';

@ApiTags('Product')
@Controller('product')
export class ProductController implements IProductService {
  constructor(private productService: ProductService) {}


  @Get()
  @ApiOperation({ summary: 'Get Product' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get product by ID',
  })
  async getProduct(@Param('codigo') codigo: string) {
    return this.productService.getProduct(codigo);
  }

  @Post()
  @ApiOperation({ summary: 'Create Product' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Create Product',
  })
  createProduct(product: CreateProductDto) {
    return this.productService.createProduct(product);
  }

  @Patch()
  @ApiOperation({ summary: 'Create Product' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Create Product',
  })
  updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productService.updateProduct(id, updateProductDto);
  }

  @Get('all')
  @ApiOperation({ summary: 'Get Products' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get all product',
  })
  listProducts() {
    return this.productService.listProducts();
  }

  @Delete()
  @ApiOperation({ summary: 'Delete Product' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Delete aproduct by Id',
  })
  deleteProduct(id: string) {
    this.productService.deleteProduct(id);
  }

  @Get('/category/active')
  @ApiOperation({ summary: 'Get Product with category active' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get Product with category active',
  })
  getProductWithCategoryActive() {
    return this.productService.getProductWithCategoryActive();
  }

  @Get('/sizes-medium-large/:size')
  @ApiOperation({ summary: 'Get Product with size MEDIUM or LARGE' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get Product with size MEDIUM or LARGE',
  })
  getProductWithSize() {
    return this.productService.getProductWithSize();
  } 
}
