#!/usr/bin/env node

const fs = require("fs");

let today = new Date().getDate();
if (today < 10) {
  today = today.toString().padStart(2, "0");
}

const dir = `./src/${today}`;

const dayTemplate = () => `import { puzzleInputToArray } from "../utils";

const doTheThing = (input: string) => {
	const inputArray = puzzleInputToArray(input);

	return 42;
};

export { doTheThing };`;

const inputTemplate = () => `export const testInput = \`\`;

export const puzzleInput = \`\`;`;

const testTemplate = () => `import { doTheThing } from "./${today}";
import { testInput, puzzleInput } from "./input";

describe("day ${today}", () => {
  test.only("sorting the test input", () => {
    expect(doTheThing(testInput)).toBe(42);
	});

	test("sorting the puzzle input", () => {
    expect(doTheThing(puzzleInput)).toBe(42);
  });
});
`;

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

fs.writeFileSync(`${dir}/${today}.test.ts`, testTemplate());
fs.writeFileSync(`${dir}/${today}.ts`, dayTemplate());
fs.writeFileSync(`${dir}/input.ts`, inputTemplate());
