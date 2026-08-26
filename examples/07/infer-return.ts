// examples/07/infer-return.ts
type GetReturnType<T> = T extends (...args: never[]) => infer R ? R : never;

function add(a: number, b: number): number {
  return a + b;
}

function sayHello(): string {
  return "안녕하세요!";
}

type AddResult = GetReturnType<typeof add>;
type Greeting = GetReturnType<typeof sayHello>;
