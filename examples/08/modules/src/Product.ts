// examples/08/modules/src/Product.ts
export default interface Product {
  id: string;
  name: string;
  price: number;
  membersOnly?: boolean;
  sizes?: string[];
}
