import { Module } from '@nestjs/common';
import { CategoryService } from './service/category/category.service';
import { CategoryController } from './controller/category.controller';

@Module({
  providers: [CategoryService],
  controllers: [CategoryController],
})
export class CategoriesModule {}
