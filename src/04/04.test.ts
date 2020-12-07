import { thing } from "./04";
import {
  // testInput,
  // validTestInput,
  // invalidTestInput,
  puzzleInput,
} from "./input";

describe("day 04", () => {
  test("validating the puzzle input", () => {
    expect(thing()).toBe(208);
  });
});
