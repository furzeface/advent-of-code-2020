import { puzzleInputToArray } from "../utils";

const validFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid", "cid"];

const birthYearValid = (field) => {
  const year = parseInt(field, 10);
  // @ts-ignore
  const isValid = field.length === 4 && year >= 1920 && year <= 2020;
  // console.log("Birth", field, isValid);

  return isValid;
};
const issueYearValid = (field) => {
  const year = parseInt(field, 10);
  // @ts-ignore
  const isValid = field.length === 4 && year >= 2010 && year <= 2020;
  // console.log("Issue", field, isValid);

  return isValid;
};
const expirationYearValid = (field) => {
  const year = parseInt(field, 10);
  // @ts-ignore
  const isValid = field.length === 4 && year >= 2020 && year <= 2030;
  // console.log("Exp", field, isValid);
  return isValid;
};
const heightValid = (field) => {
  const unit = field.slice(-2);
  const value = parseInt(field.replace(unit, ""), 10);
  switch (unit) {
    case "cm":
      // @ts-ignore
      return value >= 150 && value <= 193;
    case "in":
      // @ts-ignore
      return value >= 59 && value <= 76;
  }
};
const hairColourValid = (field) => {
  const isValid = RegExp(/^#([0-9a-f]{3}){1,2}$/i).test(field);
  // console.log("Hair", field, isValid);
  return isValid;
};

const eyeColourValid = (field) => {
  const eyeColours = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
  const isValid = field.length ===3 && eyeColours.some((eyeColour) => field.includes(eyeColour));
	// console.log("EYE", field, isValid);


  return isValid;
};
const pidYearValid = (field) => {
  const isValid = RegExp(/^[0-9]{9}$/).test(field);
  // console.log("PID", field, isValid);
  return isValid;
};

const validateFields = (passport) => {
  const fields = passport.split(/[ \n]+/);

  const mappedFields = {
    byr: null,
    iyr: null,
    eyr: null,
    hgt: null,
    hcl: null,
    ecl: null,
    pid: null,
  };

  fields.map((field) => {
    const split = field.split(":");
    mappedFields[split[0]] = split[1];
  });

  const fieldsValid = fields.filter((field) => {
    return validFields.some((validField) => field.includes(validField));
  }).length;

  // number of fields correct || only CID missing
  if (
    fieldsValid === validFields.length ||
    (fieldsValid === validFields.length - 1 && !passport.includes("cid"))
  ) {
    // then validate individual fields
    return (
      birthYearValid(mappedFields.byr) &&
      issueYearValid(mappedFields.iyr) &&
      expirationYearValid(mappedFields.eyr) &&
      heightValid(mappedFields.hgt) &&
      hairColourValid(mappedFields.hcl) &&
      eyeColourValid(mappedFields.ecl) &&
      pidYearValid(mappedFields.pid)
    );
  }

  return false;
};

const passportsValid = (input: string) => {
  const passports = puzzleInputToArray(input, "\n\n");

  return passports.filter((passport) => {
    return validateFields(passport);
  }).length;
};

export { passportsValid };
