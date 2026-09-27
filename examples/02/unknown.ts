// examples/02/unknown.ts
// any는 타입 검사를 꺼 버립니다.
const priceJson = '"129000원"';

const unsafePrice: any = JSON.parse(priceJson);
console.log(unsafePrice * 0.9); // 출력: NaN

const parsedPrice: unknown = JSON.parse(priceJson);

// console.log(parsedPrice * 0.9); // ❌ 오류: unknown은 바로 계산할 수 없습니다

if (typeof parsedPrice === "number") {
  console.log(parsedPrice * 0.9);
} else {
  console.log("숫자 데이터가 아닙니다."); // 출력: 숫자 데이터가 아닙니다.
}
