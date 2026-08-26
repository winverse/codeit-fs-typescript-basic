// examples/01/intentional-errors/refactor/b.ts
import type Product from "./types.js";

const tshirt: Product = { name: "티셔츠", price: 29_000 };
//                        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ❌ Property 'stock' is missing in type '{ name: string; price: number; }'
