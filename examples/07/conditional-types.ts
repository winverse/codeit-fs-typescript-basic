// examples/07/conditional-types.ts
type IsNumber<T> = T extends number ? true : false;

type NumberResult = IsNumber<42>;
type StringResult = IsNumber<string>;

type ElementType<T> = T extends readonly (infer U)[] ? U : T;

type StringElement = ElementType<string[]>;
type NumberValue = ElementType<number>;
