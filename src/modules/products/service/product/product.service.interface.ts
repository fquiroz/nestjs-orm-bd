import { CreateProductDto } from '../../dto/create-product.dto';
import { GetProductDto } from '../../dto/get-product.dto';
import { UpdateProductDto } from '../../dto/update-product.dto';

export interface IProductService {
  getProduct(id: string): Promise<GetProductDto>;
  createProduct(product: CreateProductDto);
  updateProduct(id: string, updateProductDto: UpdateProductDto);
  deleteProduct(id: string);
  listProducts(): Promise<GetProductDto[]>;
  getProductWithCategoryActive(): Promise<GetProductDto[]>;
  getProductWithSize();
}
