// examples/01/intentional-errors/typescript-repeat.ts
// TypeScript (정적 타이핑) — 에디터나 TypeScript 컴파일러가 코드를 검사하는 순간 오류가 표시됩니다
function repeat(str: string, count: number) {
  return str.repeat(count);
}

repeat(3, "hello");
// ❌ 오류: Argument of type 'number' is not assignable to parameter of type 'string'
