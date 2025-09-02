export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
  originalPrice?: number;
  discount?: number;
  rating?: number;
  reviews?: number;
  category?: string;
  isNew?: boolean;
  isFreeShipping?: boolean;
  flashSale?: {
    endTime: Date;
    stock: number;
    sold: number;
  };
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}