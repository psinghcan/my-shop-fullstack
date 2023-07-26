import {Category} from "./Category";

export interface Product {
  id: number;
  description: string;
  name: string
  price: number;
  status: string;
  category: Category
}

export type NewProduct = Omit<Product, 'id'> & {id: null}
