import { Module } from '@nestjs/common';
import { CategoriesModule } from 'src/modules/categories/categories.module';
import { ProductsModule } from 'src/modules/products/products.module';

@Module({
  imports: [CategoriesModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
