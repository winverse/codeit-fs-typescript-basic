// examples/01/intentional-errors/editor-support.ts
const product = {
  name: "코드잇 후드",
  price: 129_000,
  membersOnly: true,
};

console.log(product.naem);
//                   ^^^^
// ❌ Property 'naem' does not exist on type '{ name: string; price: number; ... }'
