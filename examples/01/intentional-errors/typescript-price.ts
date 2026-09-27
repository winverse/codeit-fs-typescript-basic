// examples/01/intentional-errors/typescript-price.ts
// TypeScript
const product = {
  name: "코드잇 후드",
  price: 129_000, // TypeScript가 price를 number 타입으로 기억합니다
};

product.price = "129000원";
// ❌ 오류: Type 'string' is not assignable to type 'number'
