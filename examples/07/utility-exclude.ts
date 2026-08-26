// examples/07/utility-exclude.ts
type MouseEventName = "click" | "mousedown" | "mouseup" | "mousemove";
type KeyboardEventName = "keydown" | "keyup" | "keypress";
type AppEventName = MouseEventName | KeyboardEventName;

type NonClickEvent = Exclude<AppEventName, "click">;
type NonMouseEvent = Exclude<AppEventName, MouseEventName>;

const keyboardEvent: NonMouseEvent = "keydown";
