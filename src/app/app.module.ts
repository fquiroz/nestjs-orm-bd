import { Module } from '@nestjs/common';
import { CategoriesModule } from 'src/modules/categories/categories.module';
import { PrismaModule } from 'src/modules/prisma/prisma.module';
import { ProductsModule } from 'src/modules/products/products.module';

@Module({
  imports: [PrismaModule, CategoriesModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
