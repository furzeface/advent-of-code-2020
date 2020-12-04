import { passportsValid } from "./04";
import {
  testInput,
  validTestInput,
  invalidTestInput,
  puzzleInput,
} from "./input";

describe("day 04", () => {
  test("validating the test input", () => {
    expect(passportsValid(testInput)).toBe(2);
  });

  test("validating the valid test input", () => {
    expect(passportsValid(validTestInput)).toBe(4);
  });

  test("validating the invalid test input", () => {
    expect(passportsValid(invalidTestInput)).toBe(0);
  });

  test("validating the puzzle input", () => {
    expect(passportsValid(puzzleInput)).toBe(208);
  });
});
