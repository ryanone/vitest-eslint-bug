import { describe, expect, it } from "vitest";
import { sum } from "./math";

describe.concurrent("math", () => {
  it("adds 1 and 2 correctly", ({ expect }) => {
    // No ESLint warning is triggered because expect is passed in
    const a = 1;
    const b = 2;

    expect(sum(a, b)).toBe(a + b);
  });

  it("adds 4 and 5 correctly", () => {
    // If you remove this, ESLint complains
    expect.hasAssertions();

    const a = 4;
    const b = 5;

    expect(sum(a, b)).toBe(a + b);
  });
});
