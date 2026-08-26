import { spawnSync } from "node:child_process";
import path from "node:path";

const tsc = path.join(
  process.cwd(),
  "node_modules",
  ".bin",
  process.platform === "win32" ? "tsc.cmd" : "tsc",
);

const compilerArgs = [
  "--ignoreConfig",
  "--noEmit",
  "--strict",
  "--module",
  "nodenext",
  "--target",
  "es2022",
  "--moduleDetection",
  "force",
  "--skipLibCheck",
];

const cases = [
  {
    name: "잘못된 프로퍼티 타입 대입",
    files: ["examples/01/intentional-errors/typescript-price.ts"],
    diagnostics: ["TS2322"],
  },
  {
    name: "잘못된 함수 인자",
    files: ["examples/01/intentional-errors/typescript-repeat.ts"],
    diagnostics: ["TS2345"],
  },
  {
    name: "없는 프로퍼티 접근",
    files: ["examples/01/intentional-errors/editor-support.ts"],
    diagnostics: ["TS2339"],
  },
  {
    name: "공유 타입 변경 누락",
    files: [
      "examples/01/intentional-errors/refactor/types.ts",
      "examples/01/intentional-errors/refactor/a.ts",
      "examples/01/intentional-errors/refactor/b.ts",
    ],
    diagnostics: ["TS2741"],
  },
  {
    name: "타입 추론 뒤 잘못된 대입",
    files: ["examples/02/intentional-errors/type-inference.ts"],
    diagnostics: ["TS2322"],
  },
  {
    name: "명시적 타입과 다른 값",
    files: ["examples/02/intentional-errors/explicit-types.ts"],
    diagnostics: ["TS2322"],
  },
  {
    name: "프로퍼티 타입 오류",
    files: ["examples/02/intentional-errors/type-errors/example1.ts"],
    diagnostics: ["TS2322"],
  },
  {
    name: "객체 대입 오류",
    files: ["examples/02/intentional-errors/type-errors/example2.ts"],
    diagnostics: ["TS2322"],
  },
];

let passed = 0;

for (const item of cases) {
  const result = spawnSync(tsc, [...compilerArgs, ...item.files], {
    encoding: "utf8",
  });
  const output = result.stdout + result.stderr;
  const matches = item.diagnostics.every((code) =>
    output.includes("error " + code + ":"),
  );

  if (result.status === 0 || !matches) {
    console.error("FAIL: " + item.name);
    console.error(output);
    process.exitCode = 1;
    continue;
  }

  passed += 1;
}

const runtimeError = spawnSync(
  process.execPath,
  ["examples/01/intentional-errors/javascript-repeat.js"],
  { encoding: "utf8" },
);

if (runtimeError.status === 0 || !runtimeError.stderr.includes("TypeError")) {
  console.error("FAIL: JavaScript 런타임 오류");
  console.error(runtimeError.stdout);
  console.error(runtimeError.stderr);
  process.exitCode = 1;
} else {
  passed += 1;
}

console.log("intentional error checks: " + passed + "/" + (cases.length + 1));
