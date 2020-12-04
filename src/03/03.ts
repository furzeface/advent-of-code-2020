import { puzzleInputToArray } from "../utils";

const traverseTrees = ({ input, instructions }) => {
  const inputArray = puzzleInputToArray(input);

  const repetitions = inputArray.length * 100;

  let treeCount = 0;

  const inputArrayRepeated = [];
  inputArray.forEach((line) => {
    inputArrayRepeated.push(line.repeat(repetitions));
  });

  // don’t need the first line to be checked, will always be going down one
  inputArrayRepeated.shift();

  let positionRight = 0;

  inputArrayRepeated.forEach((line, index) => {
    const newPosition = (positionRight += instructions.right);

    if (index % 2 == 0) {
      if (line[newPosition] === "#") {
        treeCount++;
      }
    }
  });

  return treeCount;
};

const multipleTraverses = (input, instructions) => {
  let total;
  instructions.forEach((instructions) => {
    const result = traverseTrees({ input, instructions });

    if (!total) {
      total = result;
    } else {
      total = total * result;
    }
  });

  return total;
};

export { traverseTrees, multipleTraverses };
