import {Product} from './Product';

export interface Order {
  product: Product;
  size: string;
  extras: string[];
  total: number;
}
