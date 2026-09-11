export interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  productName: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating : Rating ;
}

export interface CartItem {
  product: Product;
  quantity: number;
}