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
const formatCoordinate = (arr: readonly [number, number, string]): string => {
  return `Location: ${arr[2]} (${arr[0]}, ${arr[1]})`;
};

// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));

//* Problem 4

const concatenateArrays = <T>(...array: T[][]): T[] => {
  const ar: T[] = [];

  for (const arr of array) {
    for (const a of arr) {
      ar.push(a);
    }
  }
  return ar;
};
console.log(concatenateArrays<number>([1, 2], [3, 4], [5]));
