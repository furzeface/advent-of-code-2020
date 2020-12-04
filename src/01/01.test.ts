import { sortExpensesTwice, sortExpensesThrice } from "./01";
import { testInput, puzzleInput } from "./input";

describe("day 01", () => {
  test("sorting the test input", () => {
    expect(sortExpensesTwice(testInput)).toBe(514579);
  });

  test("sorting the expenses twice", () => {
    expect(sortExpensesTwice(puzzleInput)).toBe(913824);
  });

  test("sorting the expenses thrice", () => {
    expect(sortExpensesThrice(puzzleInput)).toBe(240889536);
  });
});
