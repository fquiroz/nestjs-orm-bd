import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/service/prisma.service';
import { IProductService } from './product.service.interface';
import { CreateProductDto } from '../../dto/create-product.dto';
import { UpdateProductDto } from '../../dto/update-product.dto';

@Injectable()
export class ProductService implements IProductService {
  constructor(private prisma: PrismaService) {}

  async getProduct(codigo: string) {
  
    const product = await this.prisma.product.findUnique({
      where: { codigo: codigo },
    });
   
    return product;
  }

  createProduct(product: CreateProductDto) {
    return this.prisma.product.create({ data: product });
  }

  updateProduct(id: string, _updateProductDto: UpdateProductDto) {
    return this.prisma.product.update({
      where: { id },
      data: _updateProductDto,
    });
  }
  deleteProduct(id: string) {
    return this.prisma.product.delete({ where: { id } });
  }
  listProducts() {
    return this.prisma.product.findMany();
  }

  getProductWithCategoryActive() {
    return this.prisma.product.findMany({
      include: {
        categoria: true,
      },
      where: {
        categoria: {
          activa: true,
        },
      },
    });
  }

  getProductWithSize() {
    return this.prisma.product.findMany({
      where: {
        talle: {
          in: ['MEDIUM', 'LARGE'],
        },
      },
    });
  }
}
