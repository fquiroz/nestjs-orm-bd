import { Module } from '@nestjs/common';
import { ProductService } from './service/product/product.service';
import { ProductController } from './controller/product.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [PrismaModule],
})
export class ProductsModule {}
