import { Product } from "./product.model";

export class CartItem {
  constructor(public item: Product, public quantity: number) { }
}
