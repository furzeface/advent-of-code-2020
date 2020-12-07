import { puzzleInputToArray } from "../utils";

const analyseBags = (input: string, myBag = "shiny gold") => {
  const bagDescriptions = puzzleInputToArray(input);
  const bagsCanContain = {};

  bagDescriptions.forEach((bagType) => {
    const splitBags = bagType.split("contain");
    bagsCanContain[splitBags[0].replace(" bags ", "")] = splitBags[1]
      .replace(/bag(s?)\.?/g, "")
      .trim()
      .split(", ");
  });

  let potentialBags = [];

  for (const property in bagsCanContain) {
    bagsCanContain[property].forEach((containingBag) => {
      if (containingBag.includes(myBag)) {
        potentialBags.push(property);
      }
    });
  }

  for (const property in bagsCanContain) {
    bagsCanContain[property].forEach((containingBag) => {
      potentialBags.forEach((subBag) => {
        if (containingBag.includes(subBag)) {
          potentialBags.push(property);
        }
      });
    });
	}

  return [...new Set(potentialBags)].length;
};

export { analyseBags };
