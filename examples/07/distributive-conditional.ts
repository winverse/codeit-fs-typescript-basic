// examples/07/distributive-conditional.ts
type ToArray<T> = T extends unknown ? T[] : never;

type UnionArray = ToArray<string | number>;
// string[] | number[]

type WithoutNull<T> = T extends null | undefined ? never : T;

type CleanValue = WithoutNull<string | number | null | undefined>;
// string | number
