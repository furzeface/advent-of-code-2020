import { is2020, sortExpenses } from "./01";
import input from "./input";

const testInput = `1721
979
366
299
675
1456`;

test("2000 + 20 to equal 2020", () => {
	expect(is2020(2000, 20)).toBe(true);
});

test("sorting the test input", () => {
	expect(sortExpenses(testInput)).toBe(514579);
});

test("sorting the expenses", () => {
	expect(sortExpenses(input)).toBe(913824);
});

test("sorting the expenses thrice", () => {
	expect(sortExpenses(input)).toBe(240889536);
});
