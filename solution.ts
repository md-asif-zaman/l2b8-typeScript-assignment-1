//* Problem 1

const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier === undefined) {
    return value * 2;
  }

  return value * multiplier;
};

// console.log(multiplyValue(7, 0));

//* Problem 2

const processInput = (value: number | string | boolean): string | number => {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    if (value === true) {
      return "Active";
    }
    return "Inactive";
  }
};

// console.log(processInput(true));

//* Problem 3
