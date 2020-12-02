import { passwordsValid, newPolicy } from "./02";
import puzzleInput from "./input";

const testInput = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`;

test.skip("validating the test input", () => {
  expect(passwordsValid(testInput)).toBe(2);
});

test.skip("validating the puzzle input", () => {
  expect(passwordsValid(puzzleInput)).toBe(528);
});

test("validating the test input with the new policy", () => {
  expect(newPolicy(testInput)).toBe(1);
});

test("validating the puzzle input with the new policy", () => {
  expect(newPolicy(puzzleInput)).toBe(497);
});
