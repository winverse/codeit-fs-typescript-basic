// examples/07/utility-extract.ts
type AppEvent =
  | { type: "user"; userId: number }
  | { type: "post"; postId: number }
  | { type: "error"; message: string };

type SuccessEvent = Extract<AppEvent, { type: "user" | "post" }>;

const event: SuccessEvent = {
  type: "post",
  postId: 10,
};
