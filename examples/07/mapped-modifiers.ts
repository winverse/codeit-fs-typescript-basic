// examples/07/mapped-modifiers.ts
interface User {
  readonly id: number;
  name?: string;
  email: string;
}

type RequiredUser = {
  [K in keyof User]-?: User[K];
};

type MutableRequiredUser = {
  -readonly [K in keyof User]-?: User[K];
};

const user: MutableRequiredUser = {
  id: 1,
  name: "김철수",
  email: "kim@email.com",
};

user.id = 2;
