import Product from "./Product";

export default interface Order {
  id: string;
  customer: string;
  details: Product[];
  datetime: Date;
}