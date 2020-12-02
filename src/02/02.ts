const passwordsValid = (input) => {
  const inputArray = input.split("\n");

  return inputArray.filter((password) => {
    const [policy, letter, passwordString] = password.split(" ");
    const [min, max] = policy.split("-");
    const letterRequired = letter[0];

    const regex = new RegExp(letterRequired, "g");
    const occurrences = (passwordString.match(regex) || []).length;
    return occurrences >= min && occurrences <= max;
  }).length;
};

const newPolicy = (input) => {
  const inputArray = input.split("\n");

  return inputArray.filter((password) => {
    const [policy, letter, passwordString] = password.split(" ");
    const [pos1, pos2] = policy.split("-");
    const letterRequired = letter[0];

    const letter1 = passwordString[pos1 - 1];
    const letter2 = passwordString[pos2 - 1];

    return (
      (letter1 === letterRequired || letter2 === letterRequired) &&
      letter1 !== letter2
    );
  }).length;
};

export { passwordsValid, newPolicy };
