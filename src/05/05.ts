import chalk from "chalk";
import { puzzleInputToArray } from "../utils";

const columnsTotal = 8;
const rowsTotal = 128;

const getSeatLocation = (input, upper, lower, total) => {
  let totalSeatLocations = [...Array(total).keys()];
  const inputArray = input.split("");

  for (let i = 0; i < inputArray.length; i++) {
    const currentRow = inputArray[i];
    if (currentRow === upper) {
      totalSeatLocations = totalSeatLocations.splice(
        totalSeatLocations.length / 2,
        totalSeatLocations.length
      );
    } else if (currentRow === lower) {
      totalSeatLocations = totalSeatLocations.splice(
        0,
        totalSeatLocations.length / 2
      );
    }
  }

  return totalSeatLocations[0];
};

const getAirplaneSeat = (input: string) => {
  const rowData = input.substring(0, 7);
  const columnData = input.substring(7, input.length);

  const row = getSeatLocation(rowData, "B", "F", rowsTotal);
  const column = getSeatLocation(columnData, "R", "L", columnsTotal);
  const seatId = row * 8 + column;

  return {
    row,
    column,
    seatId,
  };
};

const getHighestPassId = (input) => {
  const seatIds = sortSeats(input);
  return seatIds[seatIds.length - 1];
};

const sortSeats = (input, dir = "asc") => {
  const inputArray = puzzleInputToArray(input);
  const seatIds = inputArray
    .map((seatInput) => {
      return getAirplaneSeat(seatInput);
    })
    .map((seat) => {
      return seat.seatId;
    });

  seatIds.sort((a, b) => {
    if (dir === "asc") {
      return a - b;
    } else {
      return b - a;
    }
  });
  return seatIds;
};

const findMissingSeatId = (input) => {
  let incorrect;
  input.forEach((seatId, index) => {
    if (input[index + 1] - input[index] !== 1) {
      const lowerBound = input[index];
      const higherBound = input[index + 1];
      if (higherBound) {
        incorrect = lowerBound + 1;
      }
    }
  });

  return incorrect;
};

export { getAirplaneSeat, getHighestPassId, sortSeats, findMissingSeatId };
