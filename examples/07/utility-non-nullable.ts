// examples/07/utility-non-nullable.ts
type MaybeString = string | null | undefined;
type DefinedString = NonNullable<MaybeString>;

type MixedArray = (string | number | null | undefined)[];
type CleanElement = NonNullable<MixedArray[number]>;

function filterNullValues<T>(values: (T | null | undefined)[]): T[] {
  return values.filter((value): value is T => value != null);
}

const values: CleanElement[] = filterNullValues(["TypeScript", null, 7]);
