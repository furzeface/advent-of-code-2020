const fs = require("fs");

let today = new Date().getDate();

if (today < 10) {
  today = today.toString().padStart(2, "0");
}

const dir = `./src/${today}`;

const dayTemplate = () => `import { puzzleInputToArray } from "../utils";

const X = (input: string) => {
	const inputArray = puzzleInputToArray(input);

	return 42;
};

export { X };`;
const inputTemplate = () => `export const testInput = \`\`;

export const puzzleInput = \`\`;`;

const testTemplate = () => `import { X } from "./${today}";
import { testInput, puzzleInput } from "./input";

describe("day ${today}", () => {
  test("sorting the test input", () => {
    expect(X(testInput)).toBe(42);
	});

	test("sorting the puzzle input", () => {
    expect(X(puzzleInput)).toBe(42);
  });
});
`;

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

fs.writeFileSync(`${dir}/${today}.test.ts`, testTemplate());
fs.writeFileSync(`${dir}/${today}.ts`, dayTemplate());
fs.writeFileSync(`${dir}/input.ts`, inputTemplate());
