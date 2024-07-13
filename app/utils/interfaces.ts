export interface Product {
  id : number;
  name: string;
  description: string;
  price: number;
  category: Category;
  brand: string;
  cover: string;
  images: string[];
}

enum Category {
    
}
