import { analyseBags } from "./07";
import { testInput, puzzleInput } from "./input";

describe("day 07", () => {
  test("sorting the test input", () => {
    expect(analyseBags(testInput)).toBe(4);
  });

  test("sorting the puzzle input", () => {
    expect(analyseBags(puzzleInput)).toBe(42);
  });
});
