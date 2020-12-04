import { passwordsValid, newPolicy } from "./02";
import { puzzleInput, testInput } from "./input";

describe("day 02", () => {
  test("validating the test input", () => {
    expect(passwordsValid(testInput)).toBe(2);
  });

  test("validating the puzzle input", () => {
    expect(passwordsValid(puzzleInput)).toBe(528);
  });

  test("validating the test input with the new policy", () => {
    expect(newPolicy(testInput)).toBe(1);
  });

  test("validating the puzzle input with the new policy", () => {
    expect(newPolicy(puzzleInput)).toBe(497);
  });
});
