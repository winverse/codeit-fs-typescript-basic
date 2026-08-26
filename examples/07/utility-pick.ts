// examples/07/utility-pick.ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type UserProfile = Pick<User, "id" | "name" | "email">;

function displayUserProfile(user: UserProfile): string {
  return `${user.name} (${user.email})`;
}
