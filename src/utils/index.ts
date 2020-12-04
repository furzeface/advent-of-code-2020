const puzzleInputToArray = (input: string, char = "\n") => {
  return input.split(char);
};

export { puzzleInputToArray };
