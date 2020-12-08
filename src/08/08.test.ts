import {
runProgram } from "./08";
import { testInput, puzzleInput } from "./input";

describe("day 08", () => {
  test.only("running the test instructions", () => {
    expect(
runProgram(testInput)).toBe(5);
	});

	test("running the puzzle instructions", () => {
    expect(
runProgram(puzzleInput)).toBe(42);
  });
});
