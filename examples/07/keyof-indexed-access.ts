// examples/07/keyof-indexed-access.ts
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

function getProperty<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
}

const user: User = {
  id: 1,
  name: "김철수",
  email: "kim@email.com",
  age: 25,
};

const userName = getProperty(user, "name");
const userAge = getProperty(user, "age");

console.log(userName, userAge);
// getProperty(user, "height"); // ❌ User에 없는 키입니다.
