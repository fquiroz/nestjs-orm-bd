import { ETalle, IProduct } from 'src/common/interfaces/product';

export class Product implements IProduct {
  id: string;
  codigo: string;
  nombre: string;
  id_categoria: string;
  precio: number;
  talle: ETalle;
}
