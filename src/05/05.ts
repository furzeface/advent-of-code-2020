import { puzzleInputToArray } from "../utils";

const columnsTotal = 8;
const rowsTotal = 128;

const getRow = (rowsInput) => {
  let totalRows = [...Array(rowsTotal).keys()];
  const rowsArray = rowsInput.split("");

  for (let i = 0; i < rowsArray.length; i++) {
    const currentRow = rowsArray[i];
    if (currentRow === "B") {
      totalRows = totalRows.splice(totalRows.length / 2, totalRows.length);
    } else if (currentRow === "F") {
      totalRows = totalRows.splice(0, totalRows.length / 2);
    }
  }

  return totalRows[0];
};

const getColumn = (columnsInput) => {
  let totalColumns = [...Array(columnsTotal).keys()];
  const columnsArray = columnsInput.split("");

  for (let i = 0; i < columnsArray.length; i++) {
    if (columnsArray[i] === "R") {
      totalColumns = totalColumns.splice(
        totalColumns.length / 2,
        totalColumns.length
      );
    } else if (columnsArray[i] === "L") {
      totalColumns = totalColumns.splice(0, totalColumns.length / 2);
    }
  }

  return totalColumns[0];
};

const getAirplaneSeat = (input: string) => {
  const row = getRow(input.substring(0, 7));
  const column = getColumn(input.substring(7, input.length));
  const seatId = row * 8 + column;

  return {
    row,
    column,
    seatId,
  };
};

const getHighestPassId = (input) => {
  const inputArray = puzzleInputToArray(input);
  const seatIds = inputArray
    .map((seatInput) => {
      return getAirplaneSeat(seatInput);
    })
    .map((seat) => {
      return seat.seatId;
    });

  seatIds.sort((a, b) => {
    return a - b;
  });
  return seatIds[seatIds.length - 1];
};

export { getAirplaneSeat, getHighestPassId };
