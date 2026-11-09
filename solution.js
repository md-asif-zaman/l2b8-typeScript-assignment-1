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
// console.log(processInput(true));
//* Problem 3
const formatCoordinate = (arr) => {
    return `Location: ${arr[2]} (${arr[0]}, ${arr[1]})`;
};
// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
//* Problem 4
const concatenateArrays = (...array) => {
    const ar = [];
    for (const arr of array) {
        for (const a of arr) {
            ar.push(a);
        }
    }
    return ar;
};
const getPopularCourses = (courses, minStudents) => {
    return courses.filter((course) => course.isPublished === true && course.students >= minStudents);
};
const courses = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true },
];
console.log(getPopularCourses(courses, 80));
export {};
