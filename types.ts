export interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
  description: string;
  color: string;
}

export interface CartItem extends Product {
  quantity: number;
}
