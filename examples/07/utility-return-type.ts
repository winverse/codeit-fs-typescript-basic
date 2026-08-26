// examples/07/utility-return-type.ts
function getUser() {
  return {
    id: 1,
    name: "김철수",
    email: "kim@email.com",
  };
}

async function fetchUser() {
  return getUser();
}

type User = ReturnType<typeof getUser>;
type UserPromise = ReturnType<typeof fetchUser>;
type AsyncUser = Awaited<UserPromise>;

const user: User = getUser();
const asyncUser: AsyncUser = user;
