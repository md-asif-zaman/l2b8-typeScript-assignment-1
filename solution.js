//* Problem 1
const multiplyValue = (value, multiplier) => {
    if (multiplier === undefined) {
        return value * 2;
    }
    return value * multiplier;
};
// console.log(multiplyValue(7, 0));
//* Problem 2
const processInput = (value) => {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else {
        if (value === true) {
            return "Active";
        }
        return "Inactive";
    }
};
export {};
// console.log(processInput(true));
//* Problem 3
