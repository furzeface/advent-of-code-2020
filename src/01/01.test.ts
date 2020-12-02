import { sortExpenses } from "./01";
import input from "./input";

const testInput = `1721
979
366
299
675
1456`;

test.skip("sorting the test input", () => {
  expect(sortExpenses(testInput)).toBe(514579);
});

test.skip("sorting the expenses", () => {
  expect(sortExpenses(input)).toBe(913824);
});

test.skip("sorting the expenses thrice", () => {
  expect(sortExpenses(input)).toBe(240889536);
});
