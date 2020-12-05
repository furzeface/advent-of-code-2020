import { getAirplaneSeat, getHighestPassId } from "./05";
import {
  testInput1,
  testInput2,
  testInput3,
  testInput4,
  puzzleInput,
} from "./input";

describe("day 05", () => {
  test("scanning the first test input", () => {
    expect(getAirplaneSeat(testInput1)).toStrictEqual({
      row: 70,
      column: 7,
      seatId: 567,
    });
  });

  test("scanning the second test input", () => {
    expect(getAirplaneSeat(testInput2)).toStrictEqual({
      row: 14,
      column: 7,
      seatId: 119,
    });
  });

  test("scanning the third test input", () => {
    expect(getAirplaneSeat(testInput3)).toStrictEqual({
      row: 102,
      column: 4,
      seatId: 820,
    });
  });

  test("returning the highest in a list of test boarding pass IDs", () => {
    expect(getHighestPassId(testInput4)).toBe(820);
  });

  test("returning the highest in a list of puzzle input boarding pass IDs", () => {
    expect(getHighestPassId(puzzleInput)).toBe(906);
  });
});
