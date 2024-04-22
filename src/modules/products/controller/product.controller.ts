import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
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
import { plainToInstance } from 'class-transformer';
import { GetProductDto } from '../dto/get-product.dto';

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
    type: GetProductDto,
  })
  async getProduct(@Param('codigo') codigo: string): Promise<GetProductDto> {
    const product = await this.productService.getProduct(codigo);
    if (!product) {
      throw new NotFoundException('No se encontraron datos');
    }
    return plainToInstance(GetProductDto, product);
  }

  @Post()
  @ApiOperation({ summary: 'Create Product' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Create Product',
  })
  createProduct(@Body() product: CreateProductDto) {
    const prod = this.productService.createProduct(product);
    return plainToInstance(GetProductDto, prod);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update Product' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Update Product',
    type: GetProductDto,
  })
  async updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<GetProductDto> {
    console.log('updateProduct id', id);
    const product = await this.productService.updateProduct(
      id,
      updateProductDto,
    );
    return plainToInstance(GetProductDto, product);
  }

  @Get('all')
  @ApiOperation({ summary: 'Get Products' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get all product',
    type: [GetProductDto],
  })
  async listProducts(): Promise<GetProductDto[]> {
    const products = await this.productService.listProducts();
    console.log('products', products);

    if (!products || products.length === 0) {
      throw new NotFoundException('No se encontraron datos');
    }

    return products.map((prod) => plainToInstance(GetProductDto, prod));
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Delete Product' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Delete product by Id',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteProduct(@Param('id') id: string) {
    const result = await this.productService.deleteProduct(id);
    if (!result) {
      throw new NotFoundException('Product not found');
    }
  }

  @Get('/category/active')
  @ApiOperation({ summary: 'Get Product with category active' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get Product with category active',
    type: [GetProductDto],
  })
  async getProductWithCategoryActive() {
    const products = await this.productService.getProductWithCategoryActive();
    if (!products || products.length === 0) {
      throw new NotFoundException('No se encontraron datos');
    }
    return products.map((prod) => plainToInstance(GetProductDto, prod));
  }

  @Get('/sizes-medium-large')
  @ApiOperation({ summary: 'Get Product with size MEDIUM or LARGE' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get Product with size MEDIUM or LARGE',
    type: [GetProductDto],
  })
  async getProductWithSize() {
    const products = await this.productService.getProductWithSize();
    if (!products || products.length === 0) {
      throw new NotFoundException('No se encontraron datos');
    }
    return products.map((prod) => plainToInstance(GetProductDto, prod));
  }
}
