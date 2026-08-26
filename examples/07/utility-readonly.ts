// examples/07/utility-readonly.ts
interface User {
  id: number;
  name: string;
  email: string;
}

type ReadonlyUser = Readonly<User>;

function printUser(user: ReadonlyUser): void {
  console.log(user.name);
  // user.name = "새 이름"; // ❌ 읽기 전용 프로퍼티입니다.
}
