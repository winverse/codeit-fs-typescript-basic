// examples/07/mapped-types.ts
interface User {
  id: number;
  name: string;
  email: string;
}

type OptionalUser = {
  [K in keyof User]?: User[K];
};

type StringifiedUser = {
  [K in keyof User]: string;
};

const updates: OptionalUser = { name: "새 이름" };
const formValues: StringifiedUser = {
  id: "1",
  name: "김철수",
  email: "kim@email.com",
};

console.log(updates, formValues);
