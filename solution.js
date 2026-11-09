//* Problem 1
const multiplyValue = (value, multiplier) => {
    if (multiplier === undefined) {
        return value * 2;
    }
    return value * multiplier;
};
console.log(multiplyValue(7, 0));
export {};
