export default interface Product {
  id: number;
  category: "food" | "drink";
  name: string;
  description: string;
  price: number;
}