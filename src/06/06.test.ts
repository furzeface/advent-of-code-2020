import { countCustomsAnswers, countYesAnswers } from "./06";
import { testInput, puzzleInput } from "./input";

describe("day 06", () => {
  test("counting the test input customs answers", () => {
    expect(countCustomsAnswers(testInput)).toBe(11);
  });

  test("sorting the puzzle input", () => {
    expect(countCustomsAnswers(puzzleInput)).toBe(6585);
  });

  test.only("counting the test input customs YES answers", () => {
    expect(countYesAnswers(testInput)).toBe(6);
  });
});
