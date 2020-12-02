import { puzzleInputToArray } from "../utils";

const passwordsValid = (input) => {
  const passwords = puzzleInputToArray(input);

  return passwords.filter((password) => {
    const [policy, letter, passwordString] = password.split(" ");
    const [min, max] = policy.split("-");
    const letterRequired = letter[0];

    const regex = new RegExp(letterRequired, "g");
		const occurrences = (passwordString.match(regex) || []).length;
		// @ts-ignore
    return occurrences >= min && occurrences <= max;
  }).length;
};

const newPolicy = (input) => {
  const inputArray = input.split("\n");

  return inputArray.filter((password) => {
    const [policy, letter, passwordString] = password.split(" ");
    const [position1, position2] = policy.split("-");
    const letterRequired = letter[0];

    const letter1 = passwordString[position1 - 1];
    const letter2 = passwordString[position2 - 1];

    return (
      (letter1 === letterRequired || letter2 === letterRequired) &&
      letter1 !== letter2
    );
  }).length;
};

export { passwordsValid, newPolicy };
