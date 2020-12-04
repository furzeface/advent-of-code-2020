import { traverseTrees, multipleTraverses } from "./03";
import { puzzleInput, testInput } from "./input";

describe("day 03", () => {
  test("validating the puzzle input", () => {
    expect(
      traverseTrees({ input: puzzleInput, instructions: { right: 3, down: 1 } })
    ).toBe(148);
  });

  /*
		Right 1, down 1.
		Right 3, down 1. (This is the slope you already checked.)
		Right 5, down 1.
		Right 7, down 1.
		Right 1, down 2.

		In the above example, these slopes would find 2, 7, 3, 4, and 2 tree(s) respectively; multiplied together, these produce the answer 336.
	*/
  test("validating the test input moving right 1, down 1", () => {
    expect(
      traverseTrees({ input: testInput, instructions: { right: 1, down: 1 } })
    ).toBe(2);
  });

  test("validating the test input moving right 3, down 1", () => {
    expect(
      traverseTrees({ input: testInput, instructions: { right: 3, down: 1 } })
    ).toBe(7);
  });

  test("validating the test input moving right 5, down 1", () => {
    expect(
      traverseTrees({ input: testInput, instructions: { right: 5, down: 1 } })
    ).toBe(3);
  });

  test("validating the test input moving right 7, down 1", () => {
    expect(
      traverseTrees({ input: testInput, instructions: { right: 7, down: 1 } })
    ).toBe(4);
  });

  test("validating the test input moving right 1, down 2", () => {
    expect(
      traverseTrees({ input: testInput, instructions: { right: 1, down: 2 } })
    ).toBe(2);
  });

  test("multiplying test input ", () => {
    const instructions = [
      { right: 1, down: 1 },
      { right: 3, down: 1 },
      { right: 5, down: 1 },
      { right: 7, down: 1 },
      { right: 1, down: 2 },
    ];
    expect(multipleTraverses(testInput, instructions)).toBe(336);
  });

  test.only("multiplying puzzle input ", () => {
    const instructions = [
      { right: 1, down: 1 },
      { right: 3, down: 1 },
      { right: 5, down: 1 },
      { right: 7, down: 1 },
      { right: 1, down: 2 },
    ];
    expect(multipleTraverses(puzzleInput, instructions)).toBe(336);
  });
});
