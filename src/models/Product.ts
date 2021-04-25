export default interface Product {
  id: number;
  category: Category;
  name: string;
  description: string;
  price: number;
}

type Category = 'food' | 'drink'