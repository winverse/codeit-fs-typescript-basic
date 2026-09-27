// examples/02/function-types.ts
const stock: { [id: string]: number } = {
  c001: 3,
  c002: 1,
};
const cart: string[] = [];

function addToCart(id: string, quantity: number = 1): boolean {
  if (stock[id] < quantity) {
    return false;
  }

  stock[id] -= quantity;
  for (let i = 0; i < quantity; i++) {
    cart.push(id);
  }

  return true;
}

addToCart("c001", 2);
addToCart("c001");
// addToCart(123, 2); // ❌ 오류: number를 string 자리에 넣을 수 없습니다

function printCart(title?: string): void {
  if (title) {
    console.log(title);
  }

  console.log(cart);
}

printCart();
printCart("현재 장바구니");

function addManyToCart(...ids: string[]): void {
  for (const id of ids) {
    addToCart(id);
  }
}

addManyToCart("c001", "c002");
