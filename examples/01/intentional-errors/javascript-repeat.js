// examples/01/intentional-errors/javascript-repeat.js
// JavaScript (동적 타이핑) — 실행 중에 TypeError가 발생합니다
function repeat(str, count) {
  return str.repeat(count);
}

repeat(3, "hello");
// ❌ 오류: TypeError: str.repeat is not a function
// 숫자 3에는 repeat() 메서드가 없어서 실행 중에 충돌합니다
