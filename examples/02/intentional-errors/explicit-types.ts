// examples/02/intentional-errors/explicit-types.ts
let username: string; // 타입만 먼저 선언
let age: number = 20; // 타입 선언 + 값 할당
let isLoggedIn: boolean;

username = "codeit"; // OK
username = 123; // ❌ 오류
