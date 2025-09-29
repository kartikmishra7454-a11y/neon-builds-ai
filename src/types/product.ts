export interface Product {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  stock: number;
  rating: number;
  reviews: number;
  description: string;
  specifications: Record<string, string>;
  compatibility?: string[];
  featured?: boolean;
  discount?: number;
}

export type ProductCategory = 
  | 'cpu'
  | 'gpu'
  | 'ram'
  | 'motherboard'
  | 'storage'
  | 'psu'
  | 'cabinet'
  | 'cooling'
  | 'monitor'
  | 'keyboard'
  | 'mouse'
  | 'headset'
  | 'prebuilt';

export interface PCBuild {
  id: string;
  name: string;
  type: 'gaming' | 'office' | 'budget' | 'high-end' | 'custom';
  totalPrice: number;
  components: {
    cpu?: Product;
    gpu?: Product;
    ram?: Product[];
    motherboard?: Product;
    storage?: Product[];
    psu?: Product;
    cabinet?: Product;
    cooling?: Product;
  };
  image?: string;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
  verified: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  totalPrice: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  date: string;
  shippingAddress: string;
  paymentMethod: string;
}