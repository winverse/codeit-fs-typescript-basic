// examples/01/javascript-price.js
// JavaScript
const product = {
  name: "코드잇 후드",
  price: 129_000,
};

// 어딘가에서 실수로 price에 문자열을 넣었습니다
product.price = "129000원";

// 나중에 할인 계산을 시도합니다
const salePrice = product.price * 0.9;
console.log(salePrice); // NaN
