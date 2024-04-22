import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Patch,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IProductService } from '../service/product/product.service.interface';
import { CreateProductDto } from '../dto/create-product.dto';
import { ProductService } from '../service/product/product.service';
import { UpdateProductDto } from '../dto/update-product.dto';
import { ApiResponseInterceptor } from 'src/common/interceptors/api-response.interceptor';

@ApiTags('Product')
@Controller('product')
@UseInterceptors(ApiResponseInterceptor)
export class ProductController implements IProductService {
  constructor(private productService: ProductService) {}

  @Get('codigo/:codigo')
  @ApiOperation({ summary: 'Get Product' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get product by ID',
  })
  async getProduct(@Param('codigo') codigo: string) {
    const product = await this.productService.getProduct(codigo);
    if (!product) {
      throw new NotFoundException('No se encontraron datos');
    }
    return product;
  }

  @Post()
  @ApiOperation({ summary: 'Create Product' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Create Product',
  })
  createProduct(@Body() product: CreateProductDto) {
    return this.productService.createProduct(product);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update Product' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Update Product',
  })
  updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    console.log('updateProduct id', id);
    return this.productService.updateProduct(id, updateProductDto);
  }

  @Get('all')
  @ApiOperation({ summary: 'Get Products' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get all product',
  })
  async listProducts() {
    const products = await this.productService.listProducts();
    console.log('products', products);

    if (!products) {
      throw new NotFoundException('No se encontraron datos');
    }
    return products;
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Delete Product' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Delete aproduct by Id',
  })
  deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProduct(id);
  }

  @Get('/category/active')
  @ApiOperation({ summary: 'Get Product with category active' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get Product with category active',
  })
  async getProductWithCategoryActive() {
    const products = await this.productService.getProductWithCategoryActive();
    if (products.length < 1) {
      throw new NotFoundException('No se encontraron datos');
    }
    return products;
  }

  @Get('/sizes-medium-large')
  @ApiOperation({ summary: 'Get Product with size MEDIUM or LARGE' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get Product with size MEDIUM or LARGE',
  })
  async getProductWithSize() {
    const products = await this.productService.getProductWithSize();
    if (products.length < 1) {
      throw new NotFoundException('No se encontraron datos');
    }
    return products;
  }
}
