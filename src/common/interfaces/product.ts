export interface IProduct {
  id: string;
  codigo: string;
  nombre: string;
  id_categoria: number;
  precio: number;
  talle: ETalle;
}

export enum ETalle {
  SMALL,
  MEDIUM,
  LARGE,
  EXTRA_LARGE,
}
