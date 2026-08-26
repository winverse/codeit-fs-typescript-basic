// examples/07/utility-record.ts
type UserRole = "admin" | "user" | "guest";
type Permission = "read" | "write" | "delete";

type RolePermissions = Record<UserRole, Permission[]>;

const permissions: RolePermissions = {
  admin: ["read", "write", "delete"],
  user: ["read", "write"],
  guest: ["read"],
};
