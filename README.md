# TypeScript 기본 예제 모음

이 저장소는 35. TypeScript 기본 강의의 독립 실행 예제를 담고 있습니다. 각 파일의 첫 줄 경로는 강의자료 코드블록의 경로 주석과 일치합니다.

## 시작하기

```bash
pnpm install
pnpm run check
```

`pnpm run check`는 정상 예제를 TypeScript 7.0.2와 `strict` 설정으로 검사합니다.

8장의 설정 예제는 다음 명령으로 검사하고 빌드할 수 있습니다.

```bash
pnpm run check:configs
pnpm run build:configs
```

## 의도적 오류 예제

`intentional-errors/` 아래 코드는 강의에서 타입 진단이나 런타임 오류를 관찰하기 위한 예제입니다. 정상 예제 검사에서는 제외하고 다음 명령으로 예상한 오류가 발생하는지 확인합니다.

```bash
pnpm run check:errors
```

## 모듈 예제

```bash
pnpm run build:modules
pnpm run start:modules
```

모듈 예제는 `NodeNext`, 명시적 `.js` 상대 경로, `import type`을 사용하며 `examples/08/modules/dist/`에 결과를 생성합니다.
