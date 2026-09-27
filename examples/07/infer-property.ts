// examples/07/infer-property.ts
type PropertyType<T, K extends keyof T> =
  T extends Record<K, infer V> ? V : never;

interface User {
  id: number;
  name: string;
  email: string;
}

type IdType = PropertyType<User, "id">;
type NameType = PropertyType<User, "name">;
