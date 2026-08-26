// examples/05/types-as-sets.ts
type MediumSize = "M";
type ClothingSize = "S" | "M" | "L";
type ExtendedSize = ClothingSize | "FREE";

type HasName = {
  name: string;
};

type HasPrice = {
  price: number;
};

type ProductPreview = HasName & HasPrice;

const selectedSize: MediumSize = "M";
const sizeOption: ClothingSize = selectedSize;
const eventSize: ExtendedSize = "FREE";

const preview: ProductPreview = {
  name: "코드잇 블랙 후드 집업",
  price: 129_000,
};

function fail(message: string): never {
  throw new Error(message);
}

console.log(sizeOption, eventSize, preview);

try {
  fail("never 예시");
} catch (error) {
  console.log(error);
}
