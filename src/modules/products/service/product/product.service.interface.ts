import { CreateProductDto } from '../../dto/create-product.dto';
import { UpdateProductDto } from '../../dto/update-product.dto';

export interface IProductService {
  getProduct(id: string);
  createProduct(product: CreateProductDto);
  updateProduct(id: string, updateProductDto: UpdateProductDto);
  deleteProduct(id: string);
  listProducts();
  getProductWithCategoryActive();
  getProductWithSize();
}
