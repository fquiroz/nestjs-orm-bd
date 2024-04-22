import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/service/prisma.service';
import { IProductService } from './product.service.interface';
import { CreateProductDto } from '../../dto/create-product.dto';
import { UpdateProductDto } from '../../dto/update-product.dto';
import { GetProductDto } from '../../dto/get-product.dto';

@Injectable()
export class ProductService implements IProductService {
  constructor(private prisma: PrismaService) {}

  async getProduct(codigo: string) {
    const product = await this.prisma.product.findUnique({
      where: { codigo: codigo },
    });

    const convertedProduct = {
      ...product,
      precio: product.precio.toNumber(),
    };

    return convertedProduct;
  }

  async createProduct(product: CreateProductDto) {
    const prod = await this.prisma.product.create({ data: product });

    const convertedProduct = {
      ...prod,
      precio: prod.precio.toNumber(),
    };

    return convertedProduct;
  }

  async updateProduct(id: string, _updateProductDto: UpdateProductDto) {
    const product = await this.prisma.product.update({
      where: { id },
      data: _updateProductDto,
    });

    const convertedProduct = {
      ...product,
      precio: product.precio.toNumber(),
    };

    return convertedProduct;
  }
  deleteProduct(id: string) {
    return this.prisma.product.delete({ where: { id } });
  }

  async listProducts() {
    const products = await this.prisma.product.findMany();
    const convertedProducts: GetProductDto[] = products.map((product) => {
      const convProduct = {
        ...product,
        precio: product.precio.toNumber(), // Convierte Decimal a number
      };
      return convProduct;
    });

    return convertedProducts;
  }

  async getProductWithCategoryActive() {
    const products = await this.prisma.product.findMany({
      include: {
        categoria: true,
      },
      where: {
        categoria: {
          activa: true,
        },
      },
    });

    const convertedProducts: GetProductDto[] = products.map((product) => {
      const convProduct = {
        ...product,
        precio: product.precio.toNumber(),
      };
      return convProduct;
    });

    return convertedProducts;
  }

  async getProductWithSize() {
    const products = await this.prisma.product.findMany({
      where: {
        talle: {
          in: ['MEDIUM', 'LARGE'],
        },
      },
    });

    const convertedProducts: GetProductDto[] = products.map((product) => {
      const convProduct = {
        ...product,
        precio: product.precio.toNumber(),
      };
      return convProduct;
    });

    return convertedProducts;
  }
}
