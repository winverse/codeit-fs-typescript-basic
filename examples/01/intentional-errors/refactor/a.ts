// examples/01/intentional-errors/refactor/a.ts
import type Product from "./types.js";

const hoodie: Product = { name: "후드", price: 49_000 };
//                       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ❌ Property 'stock' is missing in type '{ name: string; price: number; }'
