// examples/02/intentional-errors/type-errors/example1.ts
const product = {
  id: "c001",
  name: "라이트 윈드 브레이커",
  price: 129_000,
};

product.price = "139000원"; // ❌ 오류

const salePrice = product.price * 0.9;
console.log(`할인 가격: ${salePrice}`);
