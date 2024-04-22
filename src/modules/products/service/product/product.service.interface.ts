import { CreateProductDto } from '../../dto/create-product.dto';
import { GetProductDto } from '../../dto/get-product.dto';

export interface IProductService {
  getProduct(id: string): GetProductDto;
  createProduct(product: CreateProductDto): GetProductDto;
  updateProduct(): GetProductDto;
  listProducts(): GetProductDto[];
}
